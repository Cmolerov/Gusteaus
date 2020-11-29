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

        res.json(reviews);
    })
);

router.post(
    "/",
    requireAuth,
    asyncHandler(async (req, res) => {
        const review = new Review(data);
        await review.save();
        res.json(review);
    })
);

router.post(
    "/:id",
    requireAuth,
    asyncHandler(async (req, res) => {
        const reviewId = parseInt(req.params.id, 10);
        const reviewData = req.body;

        const review = await Review.findByPk(reviewId);

        if (review) {
            await review.update({
                content: reviewData.content,
            });
        }
        res.json(review);
    })
);

router.delete(
    "/:id",
    requireAuth,
    asyncHandler(async (req, res) => {
        const reviewId = parseInt(req.params.id, 10);

        const review = await Review.findByPk(reviewId);

        if (review) {
            await review.destroy();
        }

        res.json(review);
    })
);
