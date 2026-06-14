const Listing = require("./models/listing");
const ExpressError = require("./utils/ExpressError");
const { listingSchema , reviewschema}= require("./schema");
const  Review = require("./models/review");

module.exports.isLoggedin = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl =  req.get("Referrer") || "/listings";
    req.flash("error", "you must be logged in to create listing!");
    return res.redirect("/login");
  }
  next();
};

module.exports.saveRedirectUrl = (req, res, next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async(req,res, next)=>{
  let {id} = req.params;
  let listing = await Listing.findById(id);
  if(!listing.owner.equals(res.locals.currUser._id)){
    req.flash("error", "You don't have permission to edit this listing");
    return res.redirect(`listings/${id}`);
  }
  next();
};

module.exports.isReviewAuthor = async(req, res, next)=>{
  let { id, reviewid} = req.params;
  let review = await Review.findById(reviewid);
  if(!review.author.equals(res.locals.currUser._id)){
    req.flash("error", "You are not author of this review");
    return res.redirect(`/listings/${id}`);
  }
  next();
}

module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

module.exports.validatereview = (req, res, next) => {
  let { error } = reviewschema.validate(req.body);
  if (error) {
    let errmsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errmsg);
  } else {
    next();
  }
};
