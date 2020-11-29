const express = require("express");
const asyncHandler = require("express-async-handler");
const { Op } = require("sequelize");

const { Restaurant } = require("../../db/models");
const router = express.Router();

router.post(
    "/",
    asyncHandler(async (req, res) => {
        console.log("hello");
        const { term } = req.body;
        let restaurants = await Restaurant.findAll({
            where: {
                name: {
                    [Op.iLike]: "%" + term + "%",
                },
            },
        });

        res.json({ restaurants });
    })
);

module.exports = router;
