const express = require("express");
const asyncHandler = require("express-async-handler");
const { Restaurant, Reservation } = require("../../db/models");

const router = express.Router();



router.post(
    "/",
    asyncHandler(async (req, res) => {})
);

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const reservations = await Reservation.findAll();
        res.json(reservations);
    })
);

module.exports = router;
