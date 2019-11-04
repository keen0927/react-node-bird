const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../models');
const router = express.Router();
const passport = require('passport');

router.get('/', (req,res) => {

});

router.post('/', async (req,res, next) => {
  try {
    const exUser = await db.User.findOne({
      where: {
        userId: req.body.userId,
      }
    });
    if (exUser) {
      return res.status(403).send('이미 사용중인 아이디 입니다.')
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12); // 숫자가 커지면 해킹위험이 낮아지지면 그만큼 성능이 낮아짐 보통 10-12 사용
    const newUser = await db.User.create({
      nickname: req.body.nickname,
      userId: req.body.userId,
      password: hashedPassword,
    });
    console.log(newUser);
    return res.status(200).json(newUser);
  } catch (e) {
    console.error(e);
    // return res.status(403).send(e);
    return next(e);
  }
});

router.get('/:id', (req,res) => {

});

router.post('/logout', (req,res) => {

});

router.post('/login', (req,res) => {
  passport.authenticate('local', (err, user, info) => { // 서버에러, 사용자정보, 로직상의 에러
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, (loginErr) => {
      if (loginErr) {
        return next(loginErr);
      }
      return res.json(user);
    })
  });
});

router.get('/:id/follow', (req,res) => {

});

router.post('/:id/follow', (req,res) => {

});

router.delete('/:id/follow', (req,res) => {

});

router.delete('/:id/follower', (req,res) => {

});

router.get('/:id/posts', (req,res) => {

});

module.exports = router;
