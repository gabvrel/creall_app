const { Router } = require('express');
const router = Router();
const { getInfo } = require('../controllers/index.controller')

router.get('/getInfo', getInfo);

module.exports = router;