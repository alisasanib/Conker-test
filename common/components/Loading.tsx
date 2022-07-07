import React from 'react';
import { Audio } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20vh',
      }}
    >
      <Audio
        height="100"
        width="100"
        color="rgb(220, 235, 17)"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loading;
