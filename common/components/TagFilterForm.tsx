import React, { useState } from 'react';
import styles from './TagFilterForm.module.css';

const TagFilterForm = ({
  title,
  handleSubmit,
  filters,
  handleRemove,
}: {
  title: string;
  handleSubmit: (filter: string) => void;
  filters: string[];
  handleRemove: (filter: string) => void;
}) => {
  const [currentFilter, setCurrentFilter] = useState<string>('');

  const onsubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleSubmit(currentFilter);
    setCurrentFilter('');
  };

  return (
    <>
      <div style={{ marginTop: '25px' }}>{title}</div>
      <form action="" onSubmit={onsubmitHandler}>
        <input
          className={styles.filterInput}
          type="text"
          value={currentFilter}
          onChange={(e) => setCurrentFilter(e.target.value)}
        />
        <button type="submit" className={styles.plusFilter}>
          +
        </button>
      </form>
      {filters.length !== 0 &&
        filters.map((filter: string, id: number) => {
          return (
            <label
              style={{ marginRight: 10 }}
              className={
                title === 'Include'
                  ? [styles.label, styles.green].join(' ')
                  : [styles.label, styles.red].join(' ')
              }
            >
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
                {filter}
              </span>
              <span
                className={
                  title === 'Include'
                    ? [styles.removeFilter, styles.greenClose].join(' ')
                    : [styles.removeFilter, styles.redClose].join(' ')
                }
                onClick={() => handleRemove(filter)}
              >
                X
              </span>
            </label>
          );
        })}
    </>
  );
};

export default TagFilterForm;
