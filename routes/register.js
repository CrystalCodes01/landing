const express = require('express');
const router  = express.Router();

/* GET register page. */
router.get('/register', (req, res, next) => {
  res.render('../views/register.ejs');
});

module.exports = router;
