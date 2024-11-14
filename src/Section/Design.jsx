import React from "react";
import { Button, Container } from "react-bootstrap";

const Design = () => {
  return (
    // <Container className="mx-5 ">
      <Container className="d-flex flex-lg-row flex-column justify-content-betweenn align-items-center my-5 ">
        <img alt="Images" src="useImg.svg"  data-aos="fade-right"  />
        <article className=" align-items-center justify-content-between px-5 mx-5 " data-aos="fade-left">
          <h1 className="fw-bold ">
            <p>How to design your site footer </p> like&nbsp;
            <span className="text-success">we did ?</span>
          </h1>
          <p>tas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec qui
            Donec a eros justo. Fusce egess erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <Button variant="success btn-lg mt-3">Learn More</Button>
        </article>
      </Container>
    // </Container>
  );
};

export default Design;
