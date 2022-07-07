import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import {
  RecipeCard,
  CustomCheckbox,
  Divider,
  IngredientsContainer,
  DirectionsContainer,
  RecipeBasicData,
  Loading,
} from '../../../common/components';
import { changeNumbersInString, combineFractions } from '../../../utilts';
import styles from './index.module.css';
import PreparationTable from '../../../common/components/PreprationTable';
import { RecipeProp } from '../../../common/types';
import { useFetchAndModifyRecipeData } from '../../../common/hooks';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = () => {
  const { recipe, handleRecipeChange, id, defaultServing } =
    useFetchAndModifyRecipeData();
  return (
    <>
      <h2>Recipe: {id}</h2>
      {recipe && Object.keys(recipe).length !== 0 ? (
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
      ) : (
        <Loading />
      )}
      <ToastContainer />
    </>
  );
};

export default Recipe;
