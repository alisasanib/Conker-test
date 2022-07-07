import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { changeNumbersInString, combineFractions } from '../../utilts';

export const useFetchAndModifyRecipeData = () => {
  const [defaultServing, setDefaultServing] = useState(0);
  const [defaultIngredients, setDefaultIngredients] = useState([]);
  const [recipe, setRecipe] = useState<RecipeProp | any>({});

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function fetchData() {
      const {
        data,
        data: { servings, ingredients },
      } = await axios.get(`/api/recipes/${id}`);
      setRecipe(data);
      setDefaultServing(servings);
      setDefaultIngredients(ingredients);
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    if (defaultServing !== 0) {
      const updated = defaultIngredients.map((ingredient: string, id: number) =>
        ingredient.replace(/\d+([\/.]\d+)?/g, function (number: string) {
          return changeNumbersInString(number, defaultServing, recipe.servings);
        })
      );
      const combineUpdated = combineFractions(updated);
      setRecipe({ ...recipe, ingredients: combineUpdated });
    }
  }, [recipe.servings]);

  function handleRecipeChange(value: number) {
    setRecipe({ ...recipe, servings: recipe.servings + value });
  }

  return { recipe, handleRecipeChange, id, defaultServing };
};
