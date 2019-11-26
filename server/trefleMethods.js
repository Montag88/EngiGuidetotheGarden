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
      const plant = {
        native_status: data.native_status,
        images: data.images,
        plant_id: data.id,
        genus_id: data.genus.id,
        common_name: data.common_name,
        scientific_name: data.scientific_name,
      };
      plantResults.push(plant);
    });
    return plantResults;
  },
};
