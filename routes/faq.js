require('dotenv').config();
const express = require('express');
const router = express.Router();


router.get('/faq', (req, res) => {
    res.render(('faq'))
})




module.exports = router;