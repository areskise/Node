const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
    res.statusMessage = "Route not found";
    res.status(404).send({ message: "Route not found" });
});

module.exports = router;