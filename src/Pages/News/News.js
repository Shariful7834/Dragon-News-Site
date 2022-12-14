import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummary from "../../Shared/NewsSummary/NewsSummary";
import { Button, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";

const News = () => {
  const news = useLoaderData();
  const {
    title,
    author,
    image_url,
    details,
    _id,
    rating,
    total_view,
    category_id,
  } = news;
  return (
    <div>
      <Card className="mb-3">
        <Card.Header className="d-flex align-items-center justify-content-between ">
          <div className="d-flex">
            <Image
              roundedCircle
              className="me-2"
              src={author?.img}
              style={{ height: "60px" }}
            ></Image>
            <div className="text-start">
              <p className="mb-0">{author?.name}</p>
              <p>{author.published_date}</p>
            </div>
          </div>
          <div>
            <FaBookmark></FaBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>{details}</Card.Text>

          <Link to={`/category/${category_id}`}>
            <Button variant="primary">Back to Category</Button>
          </Link>
        </Card.Body>
        <Card.Footer className="text-dark d-flex justify-content-between align-items-center">
          <div>
            <FaStar style={{ color: "gold" }}></FaStar>
            <span className="ms-2">{rating.number}</span>
          </div>
          <div>
            <FaEye style={{ color: "black" }}></FaEye>
            <span className="ms-2">{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default News;
