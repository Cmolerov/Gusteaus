const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { Restaurant } = require("../../db/models");

const router = express.Router();

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const restaurants = await Restaurant.findAll({
            order: [["createdAt", "DESC"]],
        });
        res.json(restaurants);
    })
);

module.exports = router;
