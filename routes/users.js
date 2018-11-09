const express = require('express');
const router = express.Router();
const AuthController = require("../controllers/UserController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");
const User = require("../models/users");

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup',AuthController.create);
router.post('/signup',AuthController.store);
router.get('/signin',AuthController.login);
router.post('/signin',AuthController.signin);
router.get('/logout',AuthController.logout);
router.use(AuthMiddleware.isAuthentication);
router.get('/profile',AuthController.profile);

module.exports = router;