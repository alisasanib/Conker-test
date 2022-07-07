import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Loading, RecipeCard, RecipeContainer } from '../common/components';
import styles from '../styles/Home.module.css';
import FilterContainer from '../common/components/FilterContainer';
import 'react-toastify/dist/ReactToastify.css';

const Results = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { search, inc, exc } = router.query;

  useEffect(() => {
    async function fetchData() {
      try {
        const recipesRes = await axios.get(
          `/api/recipes?search=${search}${inc ? `&inc=${inc}` : ''}${
            exc ? `&exc=${exc}` : ''
          }`
        );
        setRecipes(recipesRes.data);
        setIsLoading(false);
      } catch (e) {
        toast.error('Something went wrong! Please try later');
        console.log('Error: ', e);
      }
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
        {isLoading ? <Loading /> : <RecipeContainer recipes={recipes} />}
        <ToastContainer />
      </div>
    </>
  );
};

export default Results;
