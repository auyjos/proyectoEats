import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import "./CardOfertasComponent.scss";
function CardOfertas(props) {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col xs={7}>
            <Card.Text>{props.children}</Card.Text>
            <Badge pill bg="light" text="dark">
              Dale click aquí →
            </Badge>{" "}
          </Col>
          <Col xs={5}>
            <Card.Img variant="top" src={props.img} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CardOfertas;
