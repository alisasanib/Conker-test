import React from 'react';
import TagCard from './TagCard';

const TagsContainer = ({ tags }: { tags: string[] }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {tags.map((tag, id) => {
        return <TagCard tag={tag} key={id} />;
      })}
    </div>
  );
};

export default TagsContainer;
