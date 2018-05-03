const router = require('express').Router();

router.use('/employees', require('./employees'));
router.use('/products', require('./products'));

module.exports = router;