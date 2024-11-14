 import Card from "react-bootstrap/Card";

const  BussinessCard = ({ img, text, title }) => {
  return (
    <Card className=" py-2  border-0">
    <Card.Body className="d-flex align-items-center gap-2">
      <Card.Img 
        src={img} 
        alt="icon" 
        style={{ width: '48px', height: '48px' }} 
        className="flex-wrap"
      />
      <div className="d-flex flex-column justify-content-start">
        <Card.Title className="fs-4 text-dark-emphasis fw-bold">{text}</Card.Title>
        <Card.Text className=" text-body-secondary ">{title}</Card.Text>
      </div>
    </Card.Body>
  </Card>
  );
};

export default  BussinessCard;