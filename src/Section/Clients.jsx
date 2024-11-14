
import { Container } from "react-bootstrap";
import {  clientImageSrc } from "../constant";

const Clients = () => {
  return (
    
      <Container>
        <article className="text-center" data-aos="fade-down">
          <h1 className="fw-bold">Our Clients</h1>
          <p>We have been working with some Fortune 500+ clients</p>
        </article>
        <div className="d-flex align-items-center justify-content-around flex-wrap" data-aos="zoom-in">
          {clientImageSrc.map((item) => (
            <img
              key={item}
              src={item}
              alt="img"
              height="48"
              width="48"
              className="object-fit-contain"
            />
          ))}
         </div>
     </Container>

  
  );
};

export default Clients;
