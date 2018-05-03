const router = require('express').Router();

// /api/v1/employees
router.use('/employees', require('./employees'));

// /api/v1/products
router.use('/products', require('./products'));

module.exports = router;