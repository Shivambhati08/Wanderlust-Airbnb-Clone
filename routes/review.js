const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapasync = require("../utils/wrapasync");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {
  validatereview,
  isLoggedin,
  isReviewAuthor,
} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

// Post Review Route
router.post(
  "/",
  isLoggedin,
  validatereview,
  wrapasync(reviewController.createReview),
);

// Delete Review Route
router.delete(
  "/:reviewid",
  isLoggedin,
  isReviewAuthor,
  wrapasync(reviewController.destroyReview),
);

module.exports = router;
