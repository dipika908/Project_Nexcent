import { Card } from "react-bootstrap"

const ReviewCard = ({img}) => {
  return (
    <Card>
      <Card.Body>{img} </Card.Body>
    </Card>

  )
}

export default ReviewCard