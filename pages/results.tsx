import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import { RecipeCard, RecipeContainer } from '../common/components';
import styles from '../styles/Home.module.css';
import FilterContainer from '../common/components/FilterContainer';

const Results = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { search, inc, exc } = router.query;

  useEffect(() => {
    async function fetchData() {
      const recipesRes = await axios.get(
        `/api/recipes?search=${search}${inc ? `&inc=${inc}` : ''}${
          exc ? `&exc=${exc}` : ''
        }`
      );
      setRecipes(recipesRes.data);
      setIsLoading(false);
    }
    fetchData();
  }, [search, inc, exc]);

  return (
    <>
      <h1 style={{ height: 50, margin: '10px 0px' }}>
        Recipe Results for {search}
      </h1>
      <div className={styles.resultsContainer}>
        <FilterContainer />
        <RecipeContainer recipes={recipes} />
      </div>
    </>
  );
};

export default Results;
