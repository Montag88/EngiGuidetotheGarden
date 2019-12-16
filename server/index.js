const express = require('express');
const path = require('path');
const search = require('./searchRouter');
const user = require('./userRouter');

const app = express();
const port = 3000;

app.use('/', express.static(path.resolve(__dirname, '../client/public')));

app.use('/api/search', search);
app.use('/api/user', user);

app.listen(port, () => {
  console.log(`Guide to Garden on port ${port}!`);
});
