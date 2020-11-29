const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Restaurant, Review } = require("../../db/models");

const router = express.Router();

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const reviews = await Review.findAll({
            order: [["createdAt", "DESC"]],
            include: User,
            Restaurant,
        });
    })

    res.json(reviews)
);
