const { Router } = require('express');
const router = Router();
const { getInfo, sales } = require('../controllers/index.controller')

router.get('/getInfo', getInfo);
router.get('/sales', sales);

module.exports = router;