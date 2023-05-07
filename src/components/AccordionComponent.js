import Accordion from "react-bootstrap/Accordion";
import "./AccordionComponent.scss";
function AccordionComponent(props) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.Name}</Accordion.Header>
        <Accordion.Body>{props.children}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionComponent;
