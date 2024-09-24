from enum import Enum

from ..extensions import db


def generate_uuid():
    return str(db.UUID.uuid4())


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

    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())

    ingredients = db.relationship("RecipeIngredient", back_populates="recipe")


class RecipeIngredient(db.Model):
    __tablename__ = "recipe_ingredients"

    id = db.Column(db.UUID(as_uuid=True), primary_key=True, default=generate_uuid)
    recipe_id = db.Column(db.UUID(as_uuid=True), db.ForeignKey("recipes.id"), nullable=False)
    part_id = db.Column(db.UUID(as_uuid=True), db.ForeignKey("recipe_parts.id"), nullable=True)
    food_id = db.Column(db.UUID(as_uuid=True), db.ForeignKey("foods.food_id"), nullable=True)

    quantity = db.Column(db.Float, nullable=False)
    quantity_text = db.Column(db.String, nullable=True)
    min_quantity = db.Column(db.Float, nullable=True)
    max_quantity = db.Column(db.Float, nullable=True)
    unit = db.Column(db.String, nullable=False)
    unit_text = db.Column(db.String, nullable=True)
    ingredient_text = db.Column(db.String, nullable=False)
    extra_info = db.Column(db.String, nullable=True)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())

    food_matches = db.relationship("MatchRecipeIngredientFood", back_populates="recipe_ingredient")
    food = db.relationship("Food", back_populates="recipe_ingredients")
    recipe = db.relationship("Recipe", back_populates="ingredients")


class Food(db.Model):
    __tablename__ = 'foods'
    food_id = db.Column(db.UUID(as_uuid=True), primary_key=True, default=generate_uuid)
    food_name = db.Column(db.String)
    food_vector = db.Column(db.String)  # Store as db.String, convert to/from numpy array

    recipe_ingredients = db.relationship("RecipeIngredient", back_populates="food")
    ingredient_matches = db.relationship("MatchRecipeIngredientFood", back_populates="matched_food")


class Ingredient(db.Model):
    __tablename__ = 'ingredients'
    ingredient_id = db.Column(db.Integer, primary_key=True)
    ingredient_name = db.Column(db.String)
    best_match_food_id = db.Column(db.UUID(as_uuid=True), db.ForeignKey('foods.food_id'))
    match_score = db.Column(db.Float)


class IngredientFoodMatch(db.Model):
    __tablename__ = 'ingredient_food_matches'
    ingredient_id = db.Column(db.Integer, db.ForeignKey('ingredients.ingredient_id'), primary_key=True)
    food_id = db.Column(db.UUID(as_uuid=True), db.ForeignKey('foods.food_id'), primary_key=True)
    bi_encoder_score = db.Column(db.Float)
    cross_encoder_score = db.Column(db.Float)
    uncertainty = db.Column(db.Float)
    needs_review = db.Column(db.Boolean)


class MatchRecipeIngredientFood(db.Model):
    __tablename__ = 'matches_recipe_ingredient_food'

    id = db.Column(db.UUID(as_uuid=True), primary_key=True, default=generate_uuid)
    recipe_ingredient_id = db.Column(db.UUID(as_uuid=True), db.ForeignKey('recipe_ingredients.id'), nullable=False)
    matched_food_id = db.Column(db.UUID(as_uuid=True), db.ForeignKey('foods.food_id'), nullable=False)

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

    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())

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

    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())

    match = db.relationship("MatchRecipeIngredientFood", back_populates="manual_review",
                            foreign_keys=[match_id])
    reviewed_by = db.relationship("User", back_populates="reviews")


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.UUID(as_uuid=True), primary_key=True, default=generate_uuid)
    # Add other fields as needed

    reviews = db.relationship("MatchManualReview", back_populates="reviewed_by")
