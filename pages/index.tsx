import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { Audio } from 'react-loader-spinner';
import { RecipeCard, RecipeContainer } from '../common/components';
import styles from '../../styles/Home.module.css';
import { RecipeProp } from '../common/types';
const Home: NextPage = () => {
  const [recipes, setRecipes] = useState<RecipeProp[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get('/api/recipes');
      setRecipes(data);
      setLoading(false);
    }
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20vh',
          }}
        >
          <Audio height="100" width="100" color="orange" ariaLabel="loading" />
        </div>
      ) : (
        <RecipeContainer recipes={recipes} />
      )}
    </div>
  );
};

export default Home;
