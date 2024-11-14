import Card from "react-bootstrap/Card";

const ManageCard = ({ img, title }) => {
  return (
    <Card className="border border-0">
      <Card.Img variant="top" src={img} width={50} height={50} />
      <Card.Body className="text-center mt-3">
        <Card.Title className="fs-1 fw-bold text-dark-emphasis ">
          {title}
        </Card.Title>
        <Card.Text className="ft-light fs-5 text-body-secondary">
          Our membership management software provides full automation of
          membership renewals and payments.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ManageCard;
