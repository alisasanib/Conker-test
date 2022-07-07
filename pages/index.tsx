import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { RecipeCard, RecipeContainer, Loading } from '../common/components';
import styles from '../../styles/Home.module.css';
import { RecipeProp } from '../common/types';
import 'react-toastify/dist/ReactToastify.css';

const Home: NextPage = () => {
  const [recipes, setRecipes] = useState<RecipeProp[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get('/api/recipes');
        setRecipes(data);
        setLoading(false);
      } catch (e) {
        toast.error('Something went wrong! Please try later');
        console.log('Error: ', e);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {' '}
      {loading ? <Loading /> : <RecipeContainer recipes={recipes} />}
      <ToastContainer />
    </div>
  );
};

export default Home;
