import React from 'react';

import './grid-view.scss';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../../hooks/useStore';
import RecipeCard from '../../../components/card/RecipeCard';

type Recipe = {
  id: string;
  title: string;
  description: string;
  cookingTime: number;
  prepTime: number;
  servingsMin: number;
  servingsMax: number;
  createdAt: string;
  updatedAt: string;
};

export const GridView = observer(
  ({ onRecipeClick }: { onRecipeClick: (recipe: Recipe) => void }) => {
    const store = useStores();
    const data = store.recipes.toArray();

    return (
      <div className="recipe-grid">
        {data.map((e) => (
          <RecipeCard
            key={`${e.id}-${e.value.title}`}
            recipe={e.value}
            onRecipeClick={() => onRecipeClick(e?.value)}
          />
        ))}
      </div>
    );
  },
);
