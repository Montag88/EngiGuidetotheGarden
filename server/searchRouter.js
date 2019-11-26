const express = require('express');

const router = express.Router();

router.get('/', ({ query }, res) => {
  console.log(query.q);
});

module.exports = router;
