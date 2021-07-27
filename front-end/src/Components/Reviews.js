import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

const API = apiURL();

function Reviews() {
  const [reviews, setReviews] = useState([]);
  let { id } = useParams();

  const handleAdd = (newReview) => {
    axios
      .post(`${API}/boutique/${id}/reviews`, newReview)
      .then(
        (response) => {
          setReviews([response.data, ...reviews]);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleDelete = (id) => {
    axios
      .delete(`${API}/boutique/${id}/reviews/${id}`)
      .then(
        (response) => {
          const copyReviewArray = [...reviews];

          const indexDeletedReview = copyReviewArray.findIndex((review) => {
            return review.id === id;
          });

          copyReviewArray.splice(indexDeletedReview, 1);

          setReviews(copyReviewArray);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleEdit = (updatedReview) => {
    axios
      .put(`${API}/boutique/${id}/reviews/${updatedReview.id}`, updatedReview)
      .then(
        (response) => {
          const copyReviewArray = [...reviews];
          const indexUpdatedReview = copyReviewArray.findIndex((review) => {
            return review.id === updatedReview.id;
          });
          copyReviewArray[indexUpdatedReview] = response.data;
          setReviews(copyReviewArray);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  useEffect(() => {
    axios.get(`${API}/boutique/${id}/reviews`).then((response) => {
      setReviews(response.data);
    });
  }, [id]);

  return (
    <section className="Reviews">
      <h2>Your Reviews</h2>
      <ReviewForm handleSubmit={handleAdd}>
        <h3>Add a Boujee Review</h3>
      </ReviewForm>
      {reviews.map((review) => (
        <Review
          key={review.id}
          review={review}
          handleSubmit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </section>
  );
}

export default Reviews;
