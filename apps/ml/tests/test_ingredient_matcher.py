import unittest
from src.ingredient_matcher import IngredientMatcher

class TestIngredientMatcher(unittest.TestCase):
    def setUp(self):
        self.matcher = IngredientMatcher()
        self.ingredients = ["tomato", "onion", "garlic", "olive oil", "pasta"]
        self.matcher.encode_ingredients(self.ingredients)

    def test_find_similar_ingredients(self):
        similar = self.matcher.find_similar_ingredients("cherry tomatoes")
        self.assertEqual(len(similar), 5)
        self.assertEqual(similar[0][0], "tomato")

if __name__ == '__main__':
    unittest.main()
