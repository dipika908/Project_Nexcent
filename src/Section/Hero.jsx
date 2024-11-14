import { Button, Container } from "react-bootstrap";

const Hero = () => {
  return (
    <Container className="bg-body-tertiary ">
      <div className=" py-5 d-flex flex-lg-row flex-column justify-content-between align-items-center  ">
        <div className="px-5 " data-aos="fade-right">
          <h1 className="text-gray fw-bold">
            <p className="mb-0"> Lessons and insight </p>
            <span className="text-success">from 8 years</span>
          </h1>
          <p className="mt-3">
            Where to grow your business as a photographer: site or sociald media?
          </p>
          <Button
            type="button"
            className="btn btn-success text-white btn-lg mt-4 "
          >
            Register
          </Button>
        </div>
        <div className="px-5 mx-auto " data-aos="fade-left">
          <img alt="Images" src="sec1.svg" className="px-2 mb-5" />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
