const express = require("express");
const reviews = express.Router({ mergeParams: true });
const {
  getAllReviews,
  getReview,
  newReview,
  updateReview,
  deleteReview,
} = require("../queries/reviews");

reviews.get("/", async (req, res) => {
  try {
    const { itemId } = req.params;
    const allReviews = await getAllReviews(itemId);
    res.status(200).json(allReviews);
  } catch (e) {
    res.status(404).statusMessage(e);
  }
});

reviews.get("/:id", async (req, res) => {
  try {
    const { itemId } = req.params;
    const { id } = req.params;
    const review = await getReview(itemId, id);
    res.status(200).json(review);
  } catch (e) {
    res.status(404).statusMessage(e);
  }
});

reviews.post("/", async (req, res) => {
  try {
    const { itemId } = req.params;
    const review = await newReview(itemId, req.body);
    res.status(200).json(review);
  } catch (e) {
    res.status(404).statusMessage(e);
  }
});

reviews.put("/:id", async (req, res) => {
  try {
    const { itemId } = req.params;
    const { id } = req.params;
    const updatedReview = await updateReview(itemId, id, req.body);
    res.status(200).json(updatedReview);
  } catch (e) {
    res.status(404).statusMessage(e);
  }
});

reviews.delete("/:id", async (req, res) => {
  try {
    const { itemId } = req.params;
    const { id } = req.params;
    const deletedReview = await deleteReview(itemId, id);
    res.status(200).json(deletedReview);
  } catch (e) {
    res.status(404).statusMessage(e);
  }
});

module.exports = reviews;
