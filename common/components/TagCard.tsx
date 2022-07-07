import React from 'react';
import styles from './TagCard.module.css';

const TagCard = ({ tag }: { tag: string }) => {
  return (
    <div role="tag" className={styles.tag}>
      {tag}
    </div>
  );
};

export default TagCard;
