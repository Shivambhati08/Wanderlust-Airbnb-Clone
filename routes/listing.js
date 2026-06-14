const express = require("express");
const router = express.Router();
const wrapasync = require("../utils/wrapasync");
const Listing = require("../models/listing.js");
const { isLoggedin, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

router
  .route("/")
  // Index Route
  .get(wrapasync(listingController.index))

  // Create Route
  .post(
    isLoggedin,
    upload.single("listing[image]"),
    validateListing,
    wrapasync(listingController.createListing),
  );

// New Route
router.get("/new", isLoggedin, listingController.renderNewForm);

router
  .route("/:id")
  // Show Route
  .get(wrapasync(listingController.showListing))
  // Update Route
  .put(
    isLoggedin,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapasync(listingController.updateListing),
  )
  // Delete Route
  .delete(isLoggedin, isOwner, wrapasync(listingController.destroyListing));

// Edit Route
router.get(
  "/:id/edit",
  isLoggedin,
  isOwner,
  wrapasync(listingController.renderEditForm),
);

module.exports = router;
