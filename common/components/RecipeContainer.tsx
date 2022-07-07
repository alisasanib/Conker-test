import React from 'react';
import RecipeCard from './RecipeCard';
import { RecipeProp } from '../types';
import styles from '../../styles/Home.module.css';

const RecipeContainer = ({ recipes }: { recipes: RecipeProp[] }) => {
  return (
    <main className={styles.main}>
      {recipes.length ? (
        recipes.map((recipe) => <RecipeCard recipe={recipe} key={recipe.id} />)
      ) : (
        <span
          style={{ alignSelf: 'baseline' }}
        >
          There is no recipe :(
        </span>
      )}
    </main>
  );
};

export default RecipeContainer;
