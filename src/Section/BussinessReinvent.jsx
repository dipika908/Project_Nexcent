import { Container } from "react-bootstrap";
import { bussiness } from "../constant";
import BussinessCard from "../components/BussinessCard";

const BussinessReinvent = ({ items }) => {
    return (
        <section className="bg-body-tertiary ">
          <Container className="d-flex flex-sm-row flex-column">
            <div
              className="justify-content-start align-items-center px-5 py-5"
              data-aos="fade-right"
            >
              <h1 className="fs-1 fw-bold text-dark-emphasis">
                Helping a local
                <span className="text-success"> business reinvent itself </span>
              </h1>
              <p className="t-light  ">
                We reached here with our hardwork and dedication.
              </p>
        </div>        

            <div
            className=" align-items-center row row-cols-sm-2 "
            data-aos="zoom-in"
          >
            {bussiness.map((itm) => (
              <BussinessCard
                {...itm}
                key={itm.img}
              />
            ))}
          </div>



      </Container>
    </section>
  );
};

export default BussinessReinvent;




