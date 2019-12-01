import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function PlantListing({ plant }) {
  const { scientificName, commonName, images } = plant;
  // CAPITALIZE FIRST LETTER OF EACH WORD IN COMMON NAME
  const renderImages = () => {
    return images.map((p, i) => {
      while (i < 4) {
        if (p === null) {
          return <BlankImage />;
        }
        return <Image src={p.url} alt={commonName} />;
      }
    });
  };

  const Images = styled.span`
    display: inline-block;
  `;
  const Image = styled.img`
    height: 200px;
    width: 200px;
  `;
  const BlankImage = styled(Image)`
    background-color: lightgrey;
  `;
  const Description = styled.div`

  `;
  const ListingContainer = styled.article`
    width: fit-content;
  `;

  return (
    <ListingContainer>
      <Images>
        {renderImages()}
      </Images>
      <Description>
        <div>
          Scientific Name:&nbsp;
          <em>{scientificName}</em>
        </div>
        <div>
          {`Common Name: ${commonName}`}
        </div>
      </Description>
    </ListingContainer>
  );
}

PlantListing.propTypes = {
  plant: PropTypes.shape({
    scientificName: PropTypes.string,
    commonName: PropTypes.string,
    images: PropTypes.array,
  }).isRequired,
};
