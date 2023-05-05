
import React, { useEffect, useState } from "react";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
import NavbarComponent from "./components/navbar.js"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function App() {


    

    return(

     <>
        <NavbarComponent>
            <h1>Hola</h1>
        </NavbarComponent>

            <Container>
      <Row>
        <Col xs lg="2">1 of 2</Col>
        <Col xs lg="2">2 of 2</Col>
      </Row>
      <Row>
        <Col xs ='12' lg="6">1 of 3</Col>
        <Col xs = '12' lg="5">2 of 3</Col>
        <Col xs='12' lg="4">3 of 3</Col>
      </Row>
    </Container>
    </>
    )
  }