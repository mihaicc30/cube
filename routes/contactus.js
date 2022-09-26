require('dotenv').config();
const express = require('express');
const router = express.Router();
const conn = require('../mysqlconn');


router.get('/contactus', (req, res) => {
    res.render(('contactus'))
})


router.post('/contactus-post-message', (req, res) => {

    conn.query("INSERT INTO `contact_messages`(`name`, `email`, `phone`, `message`) VALUES (?,?,?,?)", [req.body.name, req.body.email, req.body.phone, req.body.message],
        (err, results) => {
            if (err) {
                console.log("err", err);
                res.status(500).json({
                    message: "MySQL Error!"
                })
            } else {
                console.log("Message Sent!");
                res.json({
                    response: "Message sent!"
                })
            }
        });
})


router.post('/subscribe', (req, res) => {
    try {
        conn.query("INSERT INTO `subscribers`(`email`) VALUE (?) ", [req.body.email],
            (err, results) => {
                if (JSON.parse(JSON.stringify(err))) {
                    console.log("Already subscribed!");
                    res.json({
                        "response": "Already subscribed!"
                    })
                } else {
                    console.log("Subscription successful!");
                    res.json({
                        response: "Message sent!", "results":results
                    })
                }
            });
    } catch (error) {
        console.log("??", error);
    }

})
module.exports = router;