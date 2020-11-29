const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { Restaurant } = require("../../db/models");
const { db } = require("../../config");

const router = express.Router();

const RestaurantNotFoundError = (id) => {
    const err = Error(`Restaurant with id of ${id} could not be found`);
    err.title = "Song Not Found";
    err.status = 404;
    return err;
};

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const restaurants = await Restaurant.findAll({
            order: [["createdAt", "DESC"]],
        });
        res.json(restaurants);
    })
);

router.get(
    "/:id",
    asyncHandler(async (req, res, next) => {
        const id = parseInt(req.params.id, 10);
        const restaurant = await Restaurant.findByPk(id);

        if (!restaurant) next(RestaurantNotFoundError);
        res.json(restaurant);
    })
);

module.exports = router;
