const express = require('express');
const db = require('./models');
const app = express();

const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter  = require('./routes/posts');

db.sequelize.sync();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter );
app.use('/api/posts', postsAPIRouter);


app.listen(3065, () => {
  console.log('hello server')
});
