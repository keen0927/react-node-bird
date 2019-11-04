const express = require('express');
const db = require('./models');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');

const passportConfig = require('./passport');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter  = require('./routes/posts');

dotenv.config();
db.sequelize.sync();
passportConfig();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  dotenv: process.ev.COOKIE_SECRET,
  cookie: {
    httpOnly: true, // 자바스크립트로 쿠키게 접근 못함
    secure: false, // https를 쓸때 true로
  }
}));
app.use(passport.initialize());
app.use(passport.session()); // express 세션을 내부적으로 사용해서 후에 선언되야함

app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter );
app.use('/api/posts', postsAPIRouter);


app.listen(3065, () => {
  console.log('hello server')
});
