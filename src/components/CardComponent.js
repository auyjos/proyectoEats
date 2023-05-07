import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import "../CardComponent.scss";

function CardComponent(props, img) {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={props.img} />
      <Card.ImgOverlay className="img-overlay">
        {props.tituloBadge && (
          <Badge pill bg="primary">
            {props.tituloBadge}
          </Badge>
        )}
        {props.tituloBoton && <Button>{props.tituloBoton}</Button>}
      </Card.ImgOverlay>
      <Card.Body>{props.children}</Card.Body>
    </Card>
  );
}

export default CardComponent;
