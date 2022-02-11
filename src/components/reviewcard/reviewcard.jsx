import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { patchReviewVotes } from "../../utils/api";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import dayjs from "dayjs";

const ReviewCard = ({ review }) => {
  const [votes, setVotes] = useState(review.votes);

  const cardBackGrounds = [
    "Primary",
    "Secondary",
    "Success",
    "Danger",
    "Warning",
    "Info",
    "Light",
    "Dark",
  ];

  const onPatch = (review_id) => {
    setVotes((votes) => votes + 1);
    patchReviewVotes(review_id);
    {
      review.votes += 1;
    }
  };
  return (
    <div className="reviewcontainer">
      <li key={review.title} className="votebox">
        <button
          className="likebutton"
          onClick={() => {
            onPatch(review.review_id);
          }}
        >
          Like
        </button>
        <img src={"../../../assets/plusbutton.png"} />
        <h3>{review.votes}</h3>
      </li>

      <Card
        className="mb-3"
        bg="light"
        border="primary"
        style={{ color: "#000" }}
      >
        <Card.Header>Created by: {review.owner}</Card.Header>
        <Card.Img
          src={
            review.review_img_url
              ? review.review_img_url
              : "../../../assets/placeholder.png"
          }
          alt=""
        />
        <Card.Body>
          <Card.Title>{review.title}</Card.Title>
          <Card.Text></Card.Text>
          <Link key={review.review_id} to={`/reviews/${review.review_id}`}>
            <Button>More info</Button>
          </Link>
          <Card.Footer className="text-muted">
            Created at: {dayjs(review.created_at).format("DD/MM/YYYY HH:mm A")}
          </Card.Footer>
        </Card.Body>
      </Card>

      {/* <div className="col-md-4">
        <li key={review.review_id} className="reviewcard">
          <img
            className="reviewthumbnail"
            src={
              review.review_img_url
                ? review.review_img_url
                : "../../placeholder.png"
            }
            alt=""
          />
          <h4>Title: {review.title}</h4>
          <p>Category: {review.category}</p>
          <p>Owner: {review.owner}</p>
          <p>{review.created_at}</p>
          <Link key={review.review_id} to={`/reviews/${review.review_id}`}>
            <Button className="btn btn-outline-secondary border-0">
              Hello
            </Button>
          </Link>
        </li>
      </div> */}
    </div>
  );
};

export default ReviewCard;
