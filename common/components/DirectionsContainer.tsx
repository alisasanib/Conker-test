import React from 'react';
import CustomCheckbox from './CustomCheckbox';

const DirectionsContainer = ({ directions }: { directions: string[] }) => {
  return (
    <>
      <h2>Directions</h2>
      {directions.map((dir, id) => {
        return (
          <div role="direction" key={id}>
            <CustomCheckbox
              labelStyle={{ borderRadius: '50%' }}
              titleStyle={{ fontWeight: 'bold' }}
              color={'primary'}
              title={`Step ${id + 1}`}
              detail={dir}
              // id={id}
              isDirection={true}
            />
          </div>
        );
      })}
    </>
  );
};

export default DirectionsContainer;
