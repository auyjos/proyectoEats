import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import "./CardComponent.scss";
import Image from "react-bootstrap/Image";

function CardComponent(props) {
  console.log(props);
  const { card } = props;
  return (
    <Card className="bg-dark text-white">
      {card.img && <Card.Img src={card.img} />}

      <Card.ImgOverlay className="img-overlay">
        {card.tituloBadge && (
          <Badge pill bg="success">
            {card.tituloBadge}
          </Badge>
        )}
        {card.tituloboton && (
          <Image className="imagen-corazon" src={card.tituloboton}></Image>
        )}
      </Card.ImgOverlay>
      <Card.Body>
        <h4>
          {card.body}{" "}
          <small>
            <Badge pill bg="secondary">
              {card.rating}
            </Badge>{" "}
          </small>
        </h4>

        <p>
          {card.desc} {card.costo} {card.tiempo}
        </p>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
