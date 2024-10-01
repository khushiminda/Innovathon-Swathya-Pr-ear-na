import React from 'react';

const UnityContainer = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <iframe
        src={`${process.env.PUBLIC_URL}/unity/index.html`}
        title="Unity WebGL"
        style={{ width: '100%', height: '100%', border: 'none' }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default UnityContainer;
