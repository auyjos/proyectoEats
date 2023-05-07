import Form from "react-bootstrap/Form";
import "./RadioComponent.scss";

function RadioComponent() {
  return (
    <Form>
      {["radio"].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check
            type={type}
            id={`elegir`}
            label="Elegido para ti (predeterminado)"
          />
          <Form.Check type={type} id={`popular`} label="Más popular" />

          <Form.Check type={type} id={`calificacion`} label="Calificación" />

          <Form.Check type={type} id={`entrega`} label="Tiempo de entrega" />
        </div>
      ))}
    </Form>
  );
}

export default RadioComponent;
