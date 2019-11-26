import React from 'react';
import styled from 'styled-components';

// ADD PROPS VALIDATION

function PlantListing({ plant }) {
  const { scientificName, commonName, images } = plant;
  const renderImages = () => {
    return images.map((p, i) => {
      while (i < 4) {
        if (p === null) {
          return <div>BLANK</div>;
        }
        return <img src={p.url} alt={commonName} />;
      }
    });
  };

  // ADD STYLED COMPONENTS

  return (
    <article>
      <span>
        {renderImages()}
      </span>
      <div>{`${scientificName}, ${commonName}`}</div>
    </article>
  );
}

export default PlantListing;
