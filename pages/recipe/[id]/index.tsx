import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import {
  RecipeCard,
  CustomCheckbox,
  Divider,
  IngredientsContainer,
  DirectionsContainer,
  RecipeBasicData,
} from '../../../common/components';
import { changeNumbersInString, combineFractions } from '../../../assets';
import styles from './index.module.css';
import PreparationTable from '../../../common/components/PreprationTable';
import { RecipeProp } from '../../../common/types';
const Recipe = () => {
  const [recipe, setRecipe] = useState<RecipeProp | any>({});
  const [defaultServing, setDefaultServing] = useState(0);
  const [defaultIngredients, setDefaultIngredients] = useState([]);
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

  return (
    <>
      <h2>Recipe: {id}</h2>
      {recipe && Object.keys(recipe).length !== 0 && (
        <main>
          <div
            className={styles.basicAndPrepContainer}
            style={{ display: 'flex' }}
          >
            <RecipeBasicData
              title={recipe.title}
              author={recipe.author}
              description={recipe.description}
              tags={recipe.tags}
            />
            <PreparationTable
              prep_time_min={recipe.prep_time_min}
              cook_time_min={recipe.cook_time_min}
              servings={defaultServing}
            />
          </div>
          <Divider />
          <div className={styles.ingredientContainer}>
            <IngredientsContainer
              servings={recipe.servings}
              ingredients={recipe.ingredients}
              handleRecipeDecrement={() => handleRecipeChange(-1)}
              handleRecipeIncrement={() => handleRecipeChange(1)}
            />
          </div>
          <Divider />
          <div className={styles.ingredientContainer}>
            <DirectionsContainer directions={recipe.directions} />
          </div>
        </main>
      )}
    </>
  );
};

export default Recipe;
