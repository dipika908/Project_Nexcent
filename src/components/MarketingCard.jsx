import { Card } from "react-bootstrap";

const MarketingCard = ({ Img, content }) => {
  return (
      <Card className="border border-0">
        <Card.Img variant="top" src={Img} width={350} height={350} />
        <Card.Body className="text-center  ">
         
          <div className="px-3 py-4 w-75  shadow text-center d-flex flex-column justify-content-between align-items-center position-absolute top-150 translate-middle start-50 bg-white rounded-4">
              <h1 className="fs-4 ">{content}</h1>
              <a className="link-success link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover MT-3 PX-3 PY-3">
                Read More →
              </a>
            </div>

          
        </Card.Body>
      </Card>
    
  );
};

export default MarketingCard;
