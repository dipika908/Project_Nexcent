import React from "react";
import { Button, Container } from "react-bootstrap";

const Demo = () => {
  return (
    <Container className="bg-light mt-5 pt-5">
      <div className="mt-5 pt-5 text-center " data-aos="zoom-out-up">
        <h1 className="fs-1 fw-bold">
          <p className="mb-0">Pellentesque suscipit</p>
          fringilla libero eu.
        </h1>
        <Button variant="success btn-lg mt-4">Get Demo →</Button>
      </div>
    </Container>
  );
};

export default Demo;
