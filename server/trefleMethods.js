const axios = require('axios');
const auth = require('../config.js');

module.exports = {
  searchPlants(query) {
    return axios.get('https://trefle.io/api/plants', {
      params: {
        token: auth.TREFLE_TOKEN,
        page_size: 10,
        q: query.q,
      },
    });
  },

  searchPlantDetails(data) {
    return Promise.all(data.map(({ id }) => {
      return axios.get(`https://trefle.io/api/plants/${id}`, {
        params: {
          token: auth.TREFLE_TOKEN,
        },
      });
    }));
  },

  assemblePlantResults(plantRecords) {
    const plantResults = [];
    plantRecords.forEach(({ data }) => {
      // limit to 4 images returned from search
      // if (data.images)
      const plant = {
        nativeStatus: data.native_status,
        images: data.images,
        plantId: data.id,
        genusId: data.genus.id,
        commonName: data.common_name,
        scientificName: data.scientific_name,
      };
      plantResults.push(plant);
    });
    return plantResults;
  },
};
