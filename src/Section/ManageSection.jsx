import { Container } from "react-bootstrap";
import { ClientData } from "../constant";
import ManageCard from "../components/ManageCard";

const ManageSection = ({ item }) => {
  return (
    <Container>
      <div className="text-center fs-1 fw-bold my-5 " data-aos="fade-down">
        <p className="mb-0">Manage your entire community</p>
        <span>in a single system</span>
      </div>
      <p className="text-center mt-3 " data-aos="fade-down">
        Who is Nextcent suitable for?
      </p>
      <div
        className="d-flex justify-content-between align-items-center  gap-3 py-2 px-4 flex-sm-row flex-column "
        data-aos="zoom-out"
      >
        {ClientData.map((item) => (
          <ManageCard {...item} key={item.title} />
        ))}

      </div>
    </Container>
  );
};

export default ManageSection;
