import React from "react";
import { marketingData } from "../constant";
import MarketingCard from "../components/MarketingCard";
import { Container } from "react-bootstrap";

const Marketing = ({ item }) => {
  return (
    <Container>
      <div className="text-center" data-aos="fade-right">
        <h1 className="fw-bold py-2">Caring is the new marketing</h1>
        <article>
          <p className="mb-0">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more.{" "}
          </p>
          <p className="mb-0">
            {" "}
            See who‘s joining the community, read about how our community are{" "}
          </p>
          <p> increasing their membership income and lot‘s more.</p>
        </article>
      </div>
      <div  className="d-flex justify-content-between gap-5 align-items-center flex-md-row flex-column  mx-2 "  data-aos="zoom-in-down">
        {marketingData.map((item) => (
          
          <MarketingCard {...item} key={item.Img} />
            

        ))}
      </div>
    </Container>
  );
};

export default Marketing;
