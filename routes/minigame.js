require('dotenv').config();
const express = require('express');
const router = express.Router();


router.get('/minigame', (req, res) => {
    res.render(('minigame'))
})




module.exports = router;