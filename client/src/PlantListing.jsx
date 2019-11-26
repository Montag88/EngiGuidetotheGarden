import React from 'react';
import styled from 'styled-components';

// ADD PROPS VALIDATION

function PlantListing({ plant }) {
  const { scientificName, commonName } = plant;
  return (
    <article>
      {`${scientificName}, ${commonName}`}
    </article>
  );
}

export default PlantListing;
