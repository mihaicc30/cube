require('dotenv').config();
const express = require('express');
const router = express.Router();
const conn = require('../mysqlconn');

router.get('/lineup', (req, res) => {
    conn.query('SELECT * FROM `lineup` WHERE `performing_on`="1 - 31 OCT 2022"',
        (err, results) => {
            if (err) {
                console.log("err", err);
                res.status(500).json({
                    message: "MySQL Error!"
                })
            } else {
                res.render(('lineup'), { results })
            }
        });
})


router.post('/lineup/:year', (req, res) => {
    conn.query('SELECT * FROM `lineup` WHERE `year`=? ',[req.params.year],
        async (err, results) => {
            if (err) {
                console.log("err", err);
                res.status(500).json({
                    message: "MySQL Error!"
                })
            } else {
                if(results.length>0){
                    res.json(JSON.parse(JSON.stringify(results)))
                } else{
                    res.status(404).json({"results":"No Results." })
                }
            }
        });
})


module.exports = router;