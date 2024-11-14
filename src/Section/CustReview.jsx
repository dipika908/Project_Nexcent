import React from "react";
import { clientImageSrc } from "../constant";
import { Container } from "react-bootstrap";

const CustReview = ({items}) => {
  return (
    <Container className="mt-5 pt-5 bg-light">
      <div className="d-flex flex-md-row flex-column justify-content-around align-items-center px-5 py-5 m-5 ">
        <img alt="Images" src="feedback.svg"  data-aos="fade-right"  />
        <article className="px-1" data-aos="fade-left">
          <p>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h4 className="text-success fw-bold">Tim Smith</h4>
          <p>British Dragon Boat Racing Association</p>

          <div  className=" d-flex flex-md-row flex-column align-items-center justify-content-between">
            {clientImageSrc.map((items) => (
              < img
              key={items}
              src={items}
              alt="img"
              height="48"
              width="48"
              className="object-fit-contain"
            />
              
            ))}
            <section className="d-flex">
              <p className="text-success fs-4 fw-bold">Meet All Customers →</p>
            </section>
          </div>
        </article>
      </div>
    </Container>
  );
};

export default CustReview;
