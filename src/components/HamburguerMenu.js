import React from "react";
import Button from "react-bootstrap/Button";
import "./HamburguerMenu.scss";
class HamburguerMenu extends React.Component {
  render(props) {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return <Menu>{props.children}</Menu>;
  }
}

export default HamburguerMenu;
