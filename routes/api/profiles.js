const express = require('express');
const router = express.Router();

// @route Get api/profiles
// @desc Test route
// @acess Public

router.get('/', (req, res) => res.send('Profiles route'));

module.exports = router;
