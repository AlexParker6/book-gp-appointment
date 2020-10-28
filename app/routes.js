// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line
router.use('/branch-nhs-number', require('./views/branch-nhs-number/_routes'));

router.use('/renounce-citizenship', require('./views/renounce-citizenship/_routes'));

module.exports = router;
