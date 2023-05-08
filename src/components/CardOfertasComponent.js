import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CardOfertas() {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col xs={6}>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Col>
          <Col xs={6}>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/9b/52/1d/9b521dbe07790b0ae4f4a36e578674c4.png"
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CardOfertas;
