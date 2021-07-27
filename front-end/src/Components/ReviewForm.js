import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

function ReviewForm(props) {
  let { id } = useParams();
  const { reviewDetails } = props;

  const [review, setReview] = useState({
    reviewer: "",
    title: "",
    content: "",
    rating: "",
    item_id: id,
  });

  const handleTextChange = (event) => {
    setReview({ ...review, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (reviewDetails) {
      setReview(reviewDetails);
    }
  }, [id, reviewDetails, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(review, id);
    if (reviewDetails) {
      props.toggleView();
    }
    setReview({
      reviewer: "",
      title: "",
      content: "",
      rating: "",
      item_id: id,
    });
  };
  return (
    <Container >
      {props.children}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="reviewer">
          <Form.Label>Name </Form.Label>
          <Form.Control
            value={review.reviewer}
            type="text"
            required
            onChange={handleTextChange}
            placeholder="Name"
          />
        </Form.Group>
        <Form.Group controlId="title">
          <Form.Label>Title </Form.Label>
          <Form.Control
            value={review.title}
            type="text"
            required
            onChange={handleTextChange}
            placeholder="Title"
          />
        </Form.Group>

        <Form.Group controlId="rating">
          <Form.Label>Rating </Form.Label>
          <Form.Control
            value={review.rating}
            type="number"
            required
            onChange={handleTextChange}
            placeholder="0"
            min="0"
            max="5"
            step="1"
          />
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label>Review </Form.Label>
          <Form.Control
            value={review.content}
            as="textarea"
            rows={3}
            required
            onChange={handleTextChange}
            placeholder="Boujee enough...?"
          />
        </Form.Group>
        <Button variant="outline-danger" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default ReviewForm;
