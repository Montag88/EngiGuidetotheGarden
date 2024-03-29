import React, { useContext } from 'react';
import { AppContext } from './App';
import PlantListing from './PlantListing';

export default function SearchResults() {
  const context = useContext(AppContext);
  const { searchState } = context;

  const renderPlantListings = () => {
    return searchState.map((plant) => {
      return <PlantListing plant={plant} key={plant.plantId} />;
    });
  };

  return (
    <>
      {renderPlantListings()}
    </>
  );
}
