import torch
from sentence_transformers import SentenceTransformer


class IngredientMatcher:
    def __init__(self, model_name='all-MiniLM-L6-v2'):
        self.model = SentenceTransformer(model_name)
        self.ingredient_embeddings = None
        self.ingredient_names = None

    def encode_ingredients(self, ingredients):
        self.ingredient_names = ingredients
        self.ingredient_embeddings = self.model.encode(ingredients,
                                                       convert_to_tensor=True)

    def find_similar_ingredients(self, query, top_k=5):
        query_embedding = self.model.encode(query, convert_to_tensor=True)
        cos_scores = util.cos_sim(query_embedding, self.ingredient_embeddings)[
            0]
        top_results = torch.topk(cos_scores, k=top_k)

        return [
            (self.ingredient_names[idx], score.item())
            for score, idx in zip(top_results[0], top_results[1])
        ]
