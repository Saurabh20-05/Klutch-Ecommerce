const Product = require("../models/Product");
const Review = require("../models/Review");
const ReturnRequest = require("../models/ReturnRequest");

exports.getVendorReviews = async (req, res) => {
  try {
    const Product = require("../models/Product");
    const Review = require("../models/Review");

    const products = await Product.find({
      vendor: req.user._id,
    });

    const productIds = products.map((p) => p._id);

    const reviews = await Review.find({
      product: { $in: productIds },
    })
      .populate("product", "name image")
      .populate("user", "name")
      .sort({ createdAt: -1 });

    res.json(reviews);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};