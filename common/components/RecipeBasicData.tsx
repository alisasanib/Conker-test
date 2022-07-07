import React from 'react';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import TagsContainer from './TagsContainer';
import styles from './RecipeBasicData.module.css';

const RecipeBasicData = ({
  title,
  author,
  description,
  tags,
}: {
  title: string;
  author: { name: string; url: string };
  description: string;
  tags: string[];
}) => {
  return (
    <div className={styles.basicDataContainer}>
      <h2 role="title" style={{ marginTop: '1rem' }}>
        {title}
      </h2>
      <span
        style={{ fontSize: '20px', fontWeight: 'normal' }}
        role="description"
      >
        {description}
      </span>
      <div>
        <div style={{ display: 'flex', marginTop: 20, marginBottom: 20 }}>
          <Skeleton
            circle
            width="50px"
            height="50px"
            containerClassName="avatar-skeleton"
          />
          <Link href={author.url}>
            <div
              role="author"
              style={{ cursor: 'pointer', margin: 'auto 20px' }}
            >
              By: {author.name}
            </div>
          </Link>
        </div>
      </div>
      <TagsContainer tags={tags} />
    </div>
  );
};

export default RecipeBasicData;
