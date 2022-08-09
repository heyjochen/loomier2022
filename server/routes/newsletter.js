const express = require('express');
const router = express.Router();
const { signupNewsletter } = require('../controllers/newsletter');

router.route('/').post(signupNewsletter);

module.exports = router;
