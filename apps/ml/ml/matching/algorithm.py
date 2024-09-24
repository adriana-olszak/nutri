import numpy as np
from sentence_transformers import SentenceTransformer, CrossEncoder, util
from sqlalchemy import create_engine, Column, Integer, String, Float, Boolean, \
    ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()



# Initialize database
engine = create_engine('postgresql://username:password@localhost/dbname')
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)

# Initialize models
bi_encoder = SentenceTransformer('all-MiniLM-L6-v2')
cross_encoder = CrossEncoder('cross-encoder/stsb-roberta-large')


def vector_to_string(vector):
    return ','.join(map(str, vector))


def string_to_vector(string):
    return np.fromstring(string, sep=',')


def add_food(session, food_name):
    vector = bi_encoder.encode(food_name)
    food = Food(food_name=food_name, food_vector=vector_to_string(vector))
    session.add(food)
    session.commit()


def match_ingredient(session, ingredient_name):
    ingredient_vector = bi_encoder.encode(ingredient_name)

    # Fetch all foods and their vectors
    foods = session.query(Food).all()
    food_vectors = np.array(
        [string_to_vector(food.food_vector) for food in foods])

    # Compute cosine similarities
    cosine_scores = util.pytorch_cos_sim(ingredient_vector, food_vectors)[0]

    # Get top 5 matches
    top_matches = sorted(zip(foods, cosine_scores), key=lambda x: x[1],
                         reverse=True)[:5]

    # Use cross-encoder for more accurate scoring
    cross_encoder_inputs = [(ingredient_name, food.food_name) for food, _ in
                            top_matches]
    cross_encoder_scores = cross_encoder.predict(cross_encoder_inputs)

    # Find best match
    best_match_idx = np.argmax(cross_encoder_scores)
    best_match, best_bi_score = top_matches[best_match_idx]
    best_cross_score = cross_encoder_scores[best_match_idx]

    # Add ingredient and best match to database
    ingredient = Ingredient(ingredient_name=ingredient_name,
                            best_match_food_id=best_match.food_id,
                            match_score=best_cross_score)
    session.add(ingredient)

    # Add all potential matches to database
    for food, bi_score in top_matches:
        match = IngredientFoodMatch(
            ingredient_id=ingredient.ingredient_id,
            food_id=food.food_id,
            bi_encoder_score=bi_score.item(),
            cross_encoder_score=cross_encoder_scores[
                top_matches.index((food, bi_score))],
            uncertainty=0.0,  # You could implement uncertainty estimation here
            needs_review=cross_encoder_scores[
                             top_matches.index((food, bi_score))] < 0.7
            # Example threshold
        )
        session.add(match)

    session.commit()
    return best_match.food_name, best_cross_score


# Example usage
session = Session()

# Add some foods
add_food(session, "Red Apple")
add_food(session, "Green Apple")
add_food(session, "Banana")

# Match an ingredient
best_match, score = match_ingredient(session, "Granny Smith Apple")
print(
    f"Best match for 'Granny Smith Apple': {best_match} (score: {score:.4f})")

session.close()
