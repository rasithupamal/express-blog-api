
import express from "express";
let router = express.Router();

router.get('/', function (req, res, next) {
    res.send("Hello this is blog api v1.");
});

export default router;