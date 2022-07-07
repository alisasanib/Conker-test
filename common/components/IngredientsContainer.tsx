import React, { useState } from 'react';
import CustomCheckbox from './CustomCheckbox';
import styles from './IngredientsContainer.module.css';

const IngredientsContainer = ({
  ingredients,
  servings,
  handleRecipeDecrement,
  handleRecipeIncrement,
}: {
  ingredients: string[];
  servings: number;
  handleRecipeDecrement: () => void;
  handleRecipeIncrement: () => void;
}) => {
  return (
    <>
      <div
        className={styles.adjustContainer}
        // style={{ float: 'right', width: '150px' }}
      >
        <button className={styles.button} onClick={handleRecipeDecrement}>
          -
        </button>
        <span className={styles.adjustText}>{servings}</span>
        <button className={styles.button} onClick={handleRecipeIncrement}>
          +
        </button>
      </div>
      {ingredients.map((element, id) => {
        return (
          <div role="ingredient" style={{ margin: '20px auto' }} key={id}>
            <CustomCheckbox title={element} color={'secondary'} />
          </div>
        );
      })}
    </>
  );
};

export default IngredientsContainer;
