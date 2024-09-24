import uuid
from enum import Enum
from pgvector.sqlalchemy import Vector
from sqlalchemy import func
from sqlalchemy.orm import mapped_column, relationship

from ..extensions import db


def generate_uuid():
    return str(uuid.uuid4())


class MatchStatus(Enum):
    PENDING_MATCH = "PENDING_MATCH"
    AUTO_MATCHING_IN_PROGRESS = "AUTO_MATCHING_IN_PROGRESS"
    AUTO_MATCHING_FAILED = "AUTO_MATCHING_FAILED"
    PENDING_REVIEW = "PENDING_REVIEW"
    IN_REVIEW = "IN_REVIEW"
    AUTO_APPROVED = "AUTO_APPROVED"
    APPROVED = "APPROVED"
    REJECTED = "REJECTED"
    NEEDS_REMATCH = "NEEDS_REMATCH"


class MatchQuality(Enum):
    EXACT = "EXACT"
    HIGH = "HIGH"
    MEDIUM = "MEDIUM"
    LOW = "LOW"
    POOR = "POOR"


class MatchType(Enum):
    AUTOMATIC = "AUTOMATIC"
    MANUAL = "MANUAL"


class ReviewStatus(Enum):
    PENDING = "PENDING"
    IN_PROGRESS = "IN_PROGRESS"
    APPROVED = "APPROVED"
    REJECTED = "REJECTED"
    NEEDS_FURTHER_REVIEW = "NEEDS_FURTHER_REVIEW"
    MANUAL_SELECTION = "MANUAL_SELECTION"


class Recipe(db.Model):
    __tablename__ = "recipes"

    id = db.Column(db.UUID(as_uuid=True), primary_key=True, default=generate_uuid)
    title = db.Column(db.String, unique=True, nullable=False)
    source_id = db.Column(db.String, nullable=True)
    source_url = db.Column(db.String, nullable=True)
    description = db.Column(db.String, nullable=True)
    cooking_time = db.Column(db.String, nullable=True)
    prep_time = db.Column(db.String, nullable=True)
    servings_text = db.Column(db.String, nullable=True)
    servings_min = db.Column(db.Integer, nullable=True)
    servings_max = db.Column(db.Integer, nullable=True)

    created_at = db.Column(db.DateTime, server_default=func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now(), nullable=False)

    ingredients = db.relationship("RecipeIngredient", back_populates="recipe")


class RecipeIngredient(db.Model):
    __tablename__ = "recipe_ingredients"

    id = db.Column(db.UUID(as_uuid=True), primary_key=True, default=generate_uuid)
    recipe_id = db.Column(db.UUID(as_uuid=True), db.ForeignKey("recipes.id"), nullable=False)
    food_id = db.Column(db.UUID(as_uuid=True), db.ForeignKey("foods.id"), nullable=True)

    quantity = db.Column(db.Float, nullable=False)
    quantity_text = db.Column(db.String, nullable=True)
    min_quantity = db.Column(db.Float, nullable=True)
    max_quantity = db.Column(db.Float, nullable=True)
    unit = db.Column(db.String, nullable=False)
    unit_text = db.Column(db.String, nullable=True)
    ingredient_text = db.Column(db.String, nullable=False)
    extra_info = db.Column(db.String, nullable=True)
    created_at = db.Column(db.DateTime, server_default=func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now(), nullable=False)

    food = db.relationship("Food", back_populates="recipe_ingredients")
    recipe = db.relationship("Recipe", back_populates="ingredients")
    matches = relationship("Match", back_populates="recipe_ingredient")


class Match(db.Model):
    __tablename__ = "matches"

    id = db.Column(db.UUID(as_uuid=True), primary_key=True, default=generate_uuid)
    status = db.Column(db.Enum(MatchStatus), nullable=False, default=MatchStatus.PENDING_MATCH)
    recipe_ingredient_id = db.Column(db.UUID(as_uuid=True), db.ForeignKey("recipe_ingredients.id"), nullable=False)
    selected_food_match_id = db.Column(db.UUID(as_uuid=True), db.ForeignKey("match_foods.id"), unique=True)
    created_at = db.Column(db.DateTime, server_default=func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now(), nullable=False)

    recipe_ingredient = relationship("RecipeIngredient", back_populates="matches")
    selected_food_match = relationship("MatchFood", foreign_keys=[selected_food_match_id],
                                       back_populates="selected_for_match")
    food_matches = relationship("MatchFood", back_populates="match", foreign_keys="[MatchFood.match_id]")
    manual_reviews = relationship("MatchManualReview", back_populates="match")


class MatchFood(db.Model):
    __tablename__ = 'match_foods'

    id = db.Column(db.UUID(as_uuid=True), primary_key=True, default=generate_uuid)
    match_id = db.Column(db.UUID(as_uuid=True), db.ForeignKey('matches.id'), nullable=False)
    food_id = db.Column(db.UUID(as_uuid=True), db.ForeignKey('foods.id'), nullable=False)
    match_type = db.Column(db.Enum(MatchType), nullable=False, default=MatchType.AUTOMATIC)
    match_quality = db.Column(db.Enum(MatchQuality))
    bi_encoder_score = db.Column(db.Float)
    cross_encoder_score = db.Column(db.Float)
    rank = db.Column(db.Integer)
    confidence = db.Column(db.Float)
    algorithm_version = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now(), nullable=False)

    match = relationship("Match", back_populates="food_matches", foreign_keys=[match_id])
    selected_for_match = relationship("Match", back_populates="selected_food_match",
                                      foreign_keys=[Match.selected_food_match_id])
    food = relationship("Food", back_populates="matches")


class MatchManualReview(db.Model):
    __tablename__ = 'match_manual_reviews'

    id = db.Column(db.UUID(as_uuid=True), primary_key=True, default=generate_uuid)
    match_id = db.Column(db.UUID(as_uuid=True), db.ForeignKey('matches.id'), nullable=False)
    review_status = db.Column(db.Enum(ReviewStatus), nullable=False)
    reviewer_id = db.Column(db.UUID(as_uuid=True), db.ForeignKey('users.id'))
    notes = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now(), nullable=False)

    match = relationship("Match", back_populates="manual_reviews")
    reviewer = relationship("User", back_populates="reviews")


class Food(db.Model):
    __tablename__ = 'foods'
    id = db.Column(db.UUID(as_uuid=True), primary_key=True, default=generate_uuid)
    description = db.Column(db.String)

    recipe_ingredients = relationship("RecipeIngredient", back_populates="food")
    matches = relationship("MatchFood", back_populates="food")
    embeddings = relationship('FoodEmbedding', back_populates='food')


class I18nLanguage(db.Model):
    __tablename__ = 'i18n_languages'
    code = db.Column(db.String, primary_key=True)
    name = db.Column(db.String)
    food_embeddings = db.relationship('FoodEmbedding', back_populates='language')


class FoodEmbedding(db.Model):
    __tablename__ = 'food_embeddings'

    id = db.Column(db.String, primary_key=True)
    food_id = db.Column(db.String, db.ForeignKey('foods.id'), nullable=False)
    language_code = db.Column(db.String, db.ForeignKey('i18n_languages.code'), nullable=False)
    embedding_type = db.Column(db.String, nullable=False)
    embedding = mapped_column(Vector(384))
    model_version = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, server_default=func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now(), nullable=False)

    food = db.relationship('Food', back_populates='embeddings')
    language = db.relationship('I18nLanguage', back_populates='food_embeddings')

    __table_args__ = (
        db.UniqueConstraint('food_id', 'language_code', 'embedding_type', name='uq_food_embedding'),
    )


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.UUID(as_uuid=True), primary_key=True, default=generate_uuid)

    reviews = relationship("MatchManualReview", back_populates="reviewer")
