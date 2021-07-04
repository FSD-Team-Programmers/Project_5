import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import "./booking.css";

const Booking = () => {
  const { id } = useParams();
  console.log(id);
  const [place, setPlace] = useState({});
  const [firstName, setFirstName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();

  const token = useSelector((state) => {
    return {
      token: state.token.token,
      user: state.token.user,
    };
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/places/${id}`)
      .then((result) => {
        if (result.status == 200) {
          setPlace(result.data[0]);
          setFirstName(token.user.firstName);
          setCountry(token.user.country);
          setEmail(token.user.email);
          console.log(";llllllllllllllllll", result.data[0]);
          // console.log(place[0],"mmmmmmmmmmmmmmm")
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="formBook">
        <Form onSubmit={Booking}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{place.name}</Form.Label>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{place.city}</Form.Label>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{place.address}</Form.Label>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{firstName}</Form.Label>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{country}</Form.Label>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{email}</Form.Label>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Phone Number</Form.Label>

            <Form.Control
              as="textarea"
              placeholder="your phone number here"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Booking;