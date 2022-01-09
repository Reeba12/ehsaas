import React from "react";
import TextField from "@mui/material/TextField";
import { Container, Form, Button } from "react-bootstrap";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Appbar from "./Appbar";

const Contact = () => {
  return (
    <>
      <Appbar />
      <Container className="login text-center my-4" to="/contact">
        <h2 className="text-primary fw-bolder text-xl-start">Contact Us</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicFirstname">
            <TextField
              sx={{ width: 300, maxWidth: "100%" }}
              id="outlined-basic"
              label="First name"
              variant="outlined"
              size="large"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastname">
            <TextField
              sx={{ width: 300, maxWidth: "100%" }}
              id="outlined-basic"
              label="Lastname"
              variant="outlined"
              size="large"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <TextField
              sx={{ width: 300, maxWidth: "100%" }}
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              size="large"
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Message"
              style={{ width: 300 }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Text className="text-muted">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              excepturi nam, vitae tempora pariatur eum maiores atque odit
              doloribus voluptas deserunt ducimus laboriosam labore veniam
              iusto, et, id suscipit numquam?
            </Form.Text>
          </Form.Group>
          <Button
            style={{
              width: 300,
              maxWidth: "100%",
              color: "#fffff",
            }}
            variant="primary"
            type="submit"
          >
            Send
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Contact;
