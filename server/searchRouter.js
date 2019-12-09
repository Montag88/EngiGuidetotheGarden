const express = require('express');
const trefle = require('./trefleMethods.js');

const router = express.Router();

router.get('/', ({ query }, res) => {
  const searchData = {};
  trefle.searchPlants({ query })
    .then(({ data, headers }) => {
      searchData.totalResults = headers.total;
      searchData.totalPages = headers['total-pages'];
      searchData.currentPage = headers['page-number'];
      searchData.q = query.q;
      return trefle.searchPlantDetails(data);
    })
    .then((plantRecords) => {
      const plantResults = trefle.assemblePlantResults(plantRecords);
      res.json({ plantResults, searchData });
    });
});

module.exports = router;
