const express = require('express');
const router = express.Router();
const db = require('./db');
const TaskController = require('./TaskController')

router.get('/user', TaskController.users)
router.get('/:user/:pwd', TaskController.VerificarUser)

module.exports = router