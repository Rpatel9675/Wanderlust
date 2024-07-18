const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const {listingSchema, reviewSchema}=require("./schema.js");
const Review = require('./models/review'); 
const User=require("./models/user.js");
// Connect to MongoDB
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

// Middleware

const bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Ensure this is included
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.send("Hi, I am root");
});
//...............Home routs........................

app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});
//...............New Routs........................

app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});
//...............Show listings........................

app.get("/listings/:id", async (req, res) => {
  try {
    let { id } = req.params;
    
    // Validate ObjectId format
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send("Invalid listing ID");
    }

    const listing = await Listing.findById(id).populate("reviews");
    if (!listing) {
      return res.status(404).send("Listing not found");
    }
    
    res.render("listings/show.ejs", { listing });
  } catch (err) {
    console.error("Error fetching listing:", err);
    res.status(500).send("Error fetching listing");
  }
});
//...............New Routs........................

app.post("/listings", async (req, res) => {
  try {
    const newListing = new Listing(req.body.listing);
    let result=listingSchema.validate(req.body);
    if(result.error){
      console.log("schema validation failed");
      return res.status(500).send("Wrong input");
    }
    await newListing.save();
    res.redirect("/listings");
  } catch (error) {
    console.error(error); // Log the error
    res.status(500).send("An error occurred while creating the listing."); // Send an error response
  }
});
//...............Edit Routs........................

app.get("/listings/:id/edit", async (req, res) => {
  try {
    let { id } = req.params;
    
    // Validate ObjectId format
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send("Invalid listing ID");
    }

    const listing = await Listing.findById(id);
    if (!listing) {
      return res.status(404).send("Listing not found");
    }
    
    res.render("listings/edit.ejs", { listing });
  } catch (err) {
    console.error("Error fetching listing for edit:", err);
    res.status(500).send("Error fetching listing for edit");
  }
});
//...............Update Routs........................

app.put("/listings/:id", async (req, res) => {
  try {
    let { id } = req.params;
    
    // Validate ObjectId format
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send("Invalid listing ID");
    }
    let result=listingSchema.validate(req.body);
    if(result.error){
      console.log("schema validation failed");
      return res.status(500).send("Wrong input");
    }
    // Update the listing
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    // Redirect to the updated listing page
    res.redirect(`/listings/${id}`);
  } catch (err) {
    console.error("Error updating listing:", err);
    res.status(500).send("Error updating listing");
  }
});
//...............Delete Routs........................
app.delete("/listings/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
  } catch (err) {
    console.error("Error deleting listing:", err);
    res.status(500).send("Error deleting listing");
  }
});
//...............Add Review........................
app.post("/listings/:id/reviews", async (req, res) => {
  try {
    let id = req.params.id;
    let newReview= new Review(req.body.review);
    console.log(req.body.review)
    const listing = await Listing.findById(id);
    let result = reviewSchema.validate(req.body);
    if (result.error) {
      console.log("Schema validation failed");
      return res.status(400).send("Invalid input data");
    }
    listing.reviews.push(newReview);
    await listing.save();
    await newReview.save();
    res.redirect(`/listings/${id}`);
  } catch (err) {
    console.error("Error creating review:", err);
    res.status(500).send("Internal Server Error");
  }
});
//...............Delete Review........................
app.delete("/listings/:id/reviews/:reviewId", async (req, res) => {
  try {
    let { id, reviewId } = req.params;

    if (!mongoose.isValidObjectId(reviewId)) {
      return res.status(400).send("Invalid review ID");
    }

    await Review.findByIdAndDelete(reviewId);
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });

    res.redirect(`/listings/${id}`);
  } catch (err) {
    console.error("Error deleting review:", err);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/login", (req,res)=>{
  res.render("users/login.ejs");
});
app.get("/signup", (req,res)=>{
  res.render("users/signup.ejs");
});
app.post("/signup", async(req,res)=>{
  console.log(req.body);
  let newUser= new User(req.body);
  await newUser.save();
  res.redirect("/listings");
});
app.get("/*", (req, res) => {
  res.send("Wrong url");
});

// Start the server
app.listen(8080, () => {
  console.log("Port 8080 is listening");
});
