import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './FilterContainer.module.css';
import TagFilterForm from './TagFilterForm';

const FilterContainer = () => {

  const router = useRouter();
  const { search, exc, inc } = router.query;

  const [query, setQuery] = useState<string>('');

  const [includes, setIncludes] = useState<string[]>([]);
  const [excludes, setExcludes] = useState<string[]>([]);

  useEffect(() => {
    if (search) setQuery(search as string);
    if (exc) setExcludes((exc as string).split(','));
    if (inc) setIncludes((inc as string).split(','));
  }, [search, exc, inc]);

  const addInclude = (includeValue: string) => {
    if (!includes.includes(includeValue)) {
      setIncludes([...includes, includeValue]);
    }
  };

  const addExclude = (excludeValue: string) => {
    if (!excludes.includes(excludeValue))
      setExcludes([...excludes, excludeValue]);
  };

  const removeFilter = (typeOfFilter: string, filter: string) => {
    if (typeOfFilter === 'exclude') {
      setExcludes((excludes) =>
        excludes.filter((element) => element !== filter)
      );
    } else if (typeOfFilter === 'include') {
      setIncludes((includes) =>
        includes.filter((element) => element !== filter)
      );
    }
  };

  const handleChangeFilter = () => {
    router.push({
      pathname: '/results',
      query: {
        search: search,
        exc: excludes.join(','),
        inc: includes.join(','),
      },
    });
  };

  return (
    <div className={styles.filterContainer}>
      <h3>Filters</h3>
      <div style={{ marginBottom: '20px', borderTop: 'solid 1px black' }}>
        <h4>Recipe or keyword</h4>
        <input
          className={styles.filterInput}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div style={{ borderTop: 'solid 1px black' }}>
        <h4>Tags</h4>
        <TagFilterForm
          title={'Include'}
          handleSubmit={addInclude}
          filters={includes}
          handleRemove={(include) => removeFilter('include', include)}
        />
        <TagFilterForm
          title={'Exclude'}
          handleSubmit={addExclude}
          filters={excludes}
          handleRemove={(exclude) => removeFilter('exclude', exclude)}
        />
      </div>
      <button className={styles.filterResults} onClick={handleChangeFilter}>
        Show Results
      </button>
    </div>
  );
};

export default FilterContainer;