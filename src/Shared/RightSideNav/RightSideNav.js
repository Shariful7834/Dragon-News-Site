import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { ListGroup } from "react-bootstrap";
import BrandedCarosoul from "../BrandedCarosoul/BrandedCarosoul";
import { AuthContext } from "../../Context/UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const RightSideNav = () => {
  const { signInGoogle } = useContext(AuthContext);

  const handleGoogleProvider = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        <Navigate to="/"></Navigate>;
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleProvider}
          variant="outline-primary"
          className="mb-2  "
        >
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
      <div>
        <BrandedCarosoul></BrandedCarosoul>
      </div>
    </div>
  );
};

export default RightSideNav;
