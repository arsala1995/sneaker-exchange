// All routes for Sneakers are defined here

const express = require('express');
const router = express.Router();

module.exports = (dataHelpers) => {
    //an example to send data back to client
    router.get("/", (req, res) => {
        dataHelpers.dealingWithData()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res
                    .status(500)
                    .json({ error: err.message });
            });
    });

    // send back data to different listing pages
    router.get('/:page', (req, res) => {
        dataHelpers.sneakersListings({}, 5, req.params.page)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res
                    .status(500)
                    .json({ error: err.message });
            });
    });



    return router;
};