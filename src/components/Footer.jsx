import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {socialIcon,FooterContent } from "../constant";





const Footer = () => {
  return (
    <footer className="bg-dark my-5 py-5">
      <Container className="text-white">
        <div
          className="d-flex justify-content-lg-between justify-content-center align-items-start flex-lg-row flex-column "
          data-aos="fade-up"
        >
          <div className=" ps-5  ">
            <a
              href="#"
              className="d-flex align-items-center gap-2 d navbar-brand flex-row"
            >
              <img
                src="logo.svg"
                alt="logo"
                width={35}
                height={24}
                className="logo flex-wrap object-fit-contain"
              />
              <span className=" fs-2 fw-bold text-white">Nexcent</span>
            </a>
            <article className="mt-4 text-light">
              <p>Copyright © 2020 Nexcent ltd.</p>
              <p>All rights reserved</p>
            </article>

            <div className="d-flex gap-3 mt-5 ">
              {socialIcon.map((item) => (
                <div
                  className=" rounded-circle  px-2 py-2 border border-white flex-wrap"
                  key={item}
                >
                  <img
                    src={item}
                    alt="Social-Media"
                    width={24}
                    height={24}
                    className="object-fit-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div
            className=" gap-5 d-flex flex-lg-nowrap flex-wrap  p-2"
            data-aos="fade-up"
          >
            {FooterContent.map(({ title, list }, index) => (
              <div key={index} className="d-flex flex-column gap-3 text-white">
                <h5>{title}</h5>
                <ul className="d-flex flex-column gap-2 list-unstyled">
                  {list.map((item, idx) => (
                    <li key={idx} className="gap-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className=" gap-2  p-2" data-aos="fade-up">
              <h5 className="Text-light ">Stay up to date</h5>
              <div className="input-group rounded-right w-100 ">
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  className="form-control bg-email shadow-none border border-0  "
                />

                <Button
                  variant="secondary"
                  className="bg-email border border-0"
                >
                  <img
                    src="send.svg"
                    alt="social"
                    width={20}
                    height={20}
                    color="transparent"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;



