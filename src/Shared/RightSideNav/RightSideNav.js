import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaBeer,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";
import { ListGroup } from "react-bootstrap";
const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button variant="outline-primary" className="mb-2  ">
          <FaGoogle className="me-2" />
          Google with Login
        </Button>
        <Button variant="outline-dark">
          <FaGithub className="me-2" /> Github with login
        </Button>
      </ButtonGroup>
      <div className="mt-3">
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook />
            Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp /> WhatsApp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch /> Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default RightSideNav;
