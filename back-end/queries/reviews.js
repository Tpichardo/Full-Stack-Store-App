const db = require("../db/dbConfig.js");

const getAllReviews = async (itemId) => {
  try {
    const allReviews = await db.any(
      "SELECT * FROM reviews WHERE item_id=$1",
      itemId
    );
    return allReviews;
  } catch (e) {
    return e;
  }
};

const getReview = async (itemId, id) => {
  try {
    const oneReview = await db.one(
      "SELECT * FROM reviews WHERE id=$1 AND item_id=$2",
      [id, itemId]
    );
    return oneReview;
  } catch (e) {
    return e;
  }
};

const newReview = async (itemId, review) => {
  try {
    const newReview = await db.one(
      `
      INSERT INTO reviews 
      (reviewer, title, content, rating, item_id)
      VALUES
      ($1, $2, $3, $4, $5)
      RETURNING *
      `,
      [review.reviewer, review.title, review.content, review.rating, itemId]
    );
    return newReview;
  } catch (e) {
    return e;
  }
};

const updateReview = async (itemId, id, review) => {
  try {
    const updatedReview = await db.one(
      `
      UPDATE reviews
      SET reviewer=$1, title=$2, content=$3, rating=$4
      WHERE id=$6 AND item_id=$5
      RETURNING *
      `,
      [review.reviewer, review.title, review.content, review.rating, itemId, id]
    );
    return updatedReview;
  } catch (e) {
    return e;
  }
};

const deleteReview = async (itemId, id) => {
  try {
    const deletedReview = await db.one(
      `
      DELETE FROM reviews
      WHERE id=$1 AND item_id=$2
      RETURNING *
      `,
      [id, itemId]
    );
    return deletedReview;
  } catch (e) {
    return e;
  }
};

module.exports = {
  getAllReviews,
  getReview,
  newReview,
  updateReview,
  deleteReview,
};
