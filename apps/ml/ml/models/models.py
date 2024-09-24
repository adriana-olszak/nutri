import uuid
from enum import Enum
from pgvector.sqlalchemy import Vector
from sqlalchemy import func
from sqlalchemy.orm import mapped_column

from ..extensions import db


def generate_uuid():
    return str(uuid.uuid4())


class MatchQuality(Enum):
    EXACT = "EXACT"
    HIGH = "HIGH"
    MEDIUM = "MEDIUM"
    LOW = "LOW"
    POOR = "POOR"


class MatchType(Enum):
    AUTOMATIC = "AUTOMATIC"
    MANUAL = "MANUAL"
    CORRECTED = "CORRECTED"


class ReviewStatus(Enum):
    PENDING = "PENDING"
    APPROVED = "APPROVED"
    REJECTED = "REJECTED"


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

    food_matches = db.relationship("MatchRecipeIngredientFood", back_populates="recipe_ingredient")
    food = db.relationship("Food", back_populates="recipe_ingredients")
    recipe = db.relationship("Recipe", back_populates="ingredients")


class Food(db.Model):
    __tablename__ = 'foods'
    id = db.Column(db.UUID(as_uuid=True), primary_key=True, default=generate_uuid)
    description = db.Column(db.String)

    recipe_ingredients = db.relationship("RecipeIngredient", back_populates="food")
    ingredient_matches = db.relationship("MatchRecipeIngredientFood", back_populates="matched_food")
    embeddings = db.relationship('FoodEmbedding', back_populates='food')


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

    # Relationships
    food = db.relationship('Food', back_populates='embeddings')
    language = db.relationship('I18nLanguage', back_populates='food_embeddings')

    __table_args__ = (
        db.UniqueConstraint('food_id', 'language_code', 'embedding_type', name='uq_food_embedding'),
    )


class Ingredient(db.Model):
    __tablename__ = 'ingredients'
    ingredient_id = db.Column(db.Integer, primary_key=True)
    ingredient_name = db.Column(db.String)
    best_match_food_id = db.Column(db.UUID(as_uuid=True), db.ForeignKey('foods.id'))
    match_score = db.Column(db.Float)


class MatchRecipeIngredientFood(db.Model):
    __tablename__ = 'matches_recipe_ingredient_food'

    id = db.Column(db.UUID(as_uuid=True), primary_key=True, default=generate_uuid)
    recipe_ingredient_id = db.Column(db.UUID(as_uuid=True), db.ForeignKey('recipe_ingredients.id'), nullable=False)
    matched_food_id = db.Column(db.UUID(as_uuid=True), db.ForeignKey('foods.id'), nullable=False)

    bi_encoder_score = db.Column(db.Float, nullable=False)
    cross_encoder_score = db.Column(db.Float)
    rank = db.Column(db.Integer, nullable=False)
    confidence = db.Column(db.Float, nullable=False)
    algorithm_version = db.Column(db.String)

    needs_review = db.Column(db.Boolean, default=True, nullable=False)
    match_quality = db.Column(db.Enum(MatchQuality), default=MatchQuality.MEDIUM, nullable=False)
    match_type = db.Column(db.Enum(MatchType), default=MatchType.AUTOMATIC, nullable=False)
    potential_nutritional_impact = db.Column(db.Float)
    nutritional_confidence = db.Column(db.Float)
    substitution_complexity = db.Column(db.Float)

    created_at = db.Column(db.DateTime, server_default=func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now(), nullable=False)

    recipe_ingredient = db.relationship("RecipeIngredient", back_populates="food_matches")
    matched_food = db.relationship("Food", back_populates="ingredient_matches")
    manual_review = db.relationship("MatchManualReview", back_populates="match", uselist=False)

    __table_args__ = (
        db.UniqueConstraint('recipe_ingredient_id', 'matched_food_id'),
        db.Index('idx_recipe_ingredient_id', 'recipe_ingredient_id'),
        db.Index('idx_matched_food_id', 'matched_food_id'),
        db.Index('idx_needs_review', 'needs_review'),
        db.Index('idx_match_quality', 'match_quality'),
        db.Index('idx_match_type', 'match_type'),
    )


class MatchManualReview(db.Model):
    __tablename__ = 'matches_manual_reviews'

    id = db.Column(db.UUID(as_uuid=True), primary_key=True, default=generate_uuid)
    match_id = db.Column(db.UUID(as_uuid=True), db.ForeignKey('matches_recipe_ingredient_food.id'), unique=True,
                         nullable=False)

    reviewed_by_id = db.Column(db.UUID(as_uuid=True), db.ForeignKey('users.id'))
    reviewed_at = db.Column(db.DateTime)
    review_status = db.Column(db.Enum(ReviewStatus), default=ReviewStatus.PENDING, nullable=False)

    created_at = db.Column(db.DateTime, server_default=func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now(), nullable=False)

    match = db.relationship("MatchRecipeIngredientFood", back_populates="manual_review",
                            foreign_keys=[match_id])
    reviewed_by = db.relationship("User", back_populates="reviews")


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.UUID(as_uuid=True), primary_key=True, default=generate_uuid)
    # Add other fields as needed

    reviews = db.relationship("MatchManualReview", back_populates="reviewed_by")
