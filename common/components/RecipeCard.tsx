import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './RecipeCard.module.css';
import TagsContainer from './TagsContainer';
import { RecipeProp } from '../types';

const RecipeCard = ({ recipe }: { recipe: RecipeProp }) => {
  const skeletonProps = {
    square: true,
    width: '100%',
    height: '250px',
    containerClassName: 'avatar-skeleton',
  };
  return (
    <div role="card" className={styles.cardContainer}>
      <Link href={`/recipe/${recipe.id}`}>
        <div style={{ cursor: 'pointer' }}>
          <Skeleton {...skeletonProps} />
        </div>
      </Link>
      <div className={styles.cardData}>
        <Link href={`/recipe/${recipe.id}`}>
          <h2 style={{ cursor: 'pointer' }}>{recipe.title}</h2>
        </Link>
        <Link href={recipe.author.url}>
          <a target="_blank">
            <h4 style={{ cursor: 'pointer' }}>By: {recipe.author.name}</h4>
          </a>
        </Link>
        <TagsContainer tags={recipe.tags} />
      </div>
    </div>
  );
};

export default RecipeCard;
