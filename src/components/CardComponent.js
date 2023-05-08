import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import "./CardComponent.scss";

function CardComponent(props) {
  console.log(props);
  const { card } = props;
  return (
    <Card className="bg-dark text-white">
      {card.img && <Card.Img src={card.img} />}

      <Card.ImgOverlay className="img-overlay">
        {card.tituloBadge && (
          <Badge pill bg="primary">
            {card.tituloBadge}
          </Badge>
        )}
        {card.tituloBoton && <Button>{card.tituloBoton}</Button>}
      </Card.ImgOverlay>
      <Card.Body>{props.children}</Card.Body>
    </Card>
  );
}

export default CardComponent;
