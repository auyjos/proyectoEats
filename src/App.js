import React, { useEffect, useState } from "react";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
import NavbarComponent from "./components/navbar.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardComponent from "./components/CardComponent.js";
import Button from "react-bootstrap/Button";

import SearchBar from "./components/SeachbarComponent.js";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import Badge from "react-bootstrap/Badge";
import "./App.scss";
import AccordionComponent from "./components/AccordionComponent.js";
import RadioComponent from "./components/RadioComponent.js";
import Form from "react-bootstrap/Form";
const iconosComida = [
  {
    nombre: "Ofertas",
    desc: "",
    img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/deals.png",
  },
  {
    nombre: "Express",
    desc: "",
    img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/convenience.png",
  },
  {
    nombre: "Alcohol",
    desc: "",
    img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/alcohol.png",
  },
  {
    nombre: "Pizza",
    desc: "",
    img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/pizza.png",
  },
  {
    nombre: "Mascotas",
    desc: "",
    img: "https://cn-geo1.uber.com/static/mobile-content/eats/pet_supplies.png",
  },
  {
    nombre: "Mejor Valorados",
    desc: "",
    img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/top_eats.png",
  },
  {
    nombre: "Sushi",
    desc: "",
    img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/sushi.png",
  },
  {
    nombre: "Postres",
    desc: "",
    img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/dessert.png",
  },
  {
    nombre: "China",
    desc: "",
    img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/chinese.png",
  },
  {
    nombre: "Té de burbujas",
    desc: "",
    img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/bubbletea.png",
  },
  {
    nombre: "Opciones Saludables",
    desc: "",
    img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/healthy.png",
  },
  {
    nombre: "Alitas",
    desc: "",
    img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/wings.png",
  },
  {
    nombre: "Comida rápida",
    desc: "",
    img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/fastfood.png",
  },
  {
    nombre: "India",
    desc: "",
    img: "  https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/indian.png",
  },
  {
    nombre: "Comida reconfortante",
    desc: "",
    img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/comfortfood.png",
  },
  {
    nombre: "Cafe y Té",
    desc: "",
    img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/coffeeandtea.png",
  },
  {
    nombre: "Asiática",
    desc: "",
    img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/asian.png",
  },
  {
    nombre: "Mexicana",
    desc: "",
    img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/mexican.png",
  },
];

const IconoComida = (props) => {
  const { comida } = props;
  return (
    <Col className="icono-comida">
      <Stack gap={3}>
        <Image className="icono-imagen" src={comida.img} roundedCircle />
        <p className="">{comida.nombre}</p>
      </Stack>
    </Col>
  );
};

const CardComida = (props) => {
  const { card } = props;
  return <CardComponent></CardComponent>;
};

const cardComida = [
  {
    body: "Hola",
    desc: "",
    tituloBadge: "",
    tituloboton: "",
    costo: "",
    rating: "",
    tiempo: "",
    img: "",
  },
];

export default function App() {
  return (
    <>
      <div>
        <NavbarComponent>
          <div className="wrap-buttons">
            <div>
              <Button variant="light">Entrega a domicilio</Button>
            </div>
            <div></div>
            <div>
              <Button variant="light">Recolectar</Button>
            </div>
          </div>
          <div className="button-direccion">
            <Button variant="light">3ra Calle A • Ahora</Button>
          </div>
          <div>
            <SearchBar></SearchBar>
          </div>
          <div>
            <Button variant="dark">
              <Image
                className="carrito"
                src="https://cdn-icons-png.flaticon.com/512/1124/1124199.png"
              ></Image>
              Carrito • 0
            </Button>
          </div>
          <div>
            <Button variant="light">
              <Image
                className="sesion"
                src="https://icons.veryicon.com/png/o/miscellaneous/domain-icons/my-account-login.png"
              ></Image>
              Iniciar sesión
            </Button>{" "}
          </div>
          <div>
            <Button variant="light">Regístrate</Button>{" "}
          </div>
        </NavbarComponent>
      </div>

      <Container>
        <div className="menu-wrapper">
          <Row className="menu-iconos-header">
            {iconosComida.map((comida) => {
              return <IconoComida key={comida.nombre} comida={comida} />;
            })}
          </Row>
        </div>
      </Container>

      {/* <Container>
        <div className="menu-wrapper-cards">
          <Row className="menu-cardComida">
            {cardComida.map((card) => {
              return <CardComponent key={card.nombre} card={card} />;
            })}
          </Row>
        </div>
      </Container> */}

      <div className="cartas-principales">
        <Container>
          <div>
            <Row>
              <Col xs={6}>
                <h1>¿Se te antoja? Pídelo</h1>
                <p>Busca un restaurante, tipo de comida o plato favorito.</p>
              </Col>

              <Col xs={2}>
                <CardComponent img="https://d1g1f25tn8m2e6.cloudfront.net/f01cd9c9-6088-4ef9-9e57-c2242abe166e.jpeg">
                  <h5>Disfruta de los mejores platillos asiáticos en</h5>
                  <p>Mr.Sushi</p>
                </CardComponent>
              </Col>

              <Col xs={2}>
                <CardComponent img="https://d1g1f25tn8m2e6.cloudfront.net/42ed7e35-0836-4207-a199-98817858b5e3.jpg">
                  <h5>Hasta 2x1 en los mejores restaurantes</h5>
                  <p>#Orgullo Chapin</p>
                </CardComponent>
              </Col>
              <Col xs={2}>
                <CardComponent img="https://d1g1f25tn8m2e6.cloudfront.net/01fad6a6-cdd8-4566-9eeb-c9356dd41ef4.png">
                  <h5>Costo de Envío Gratis en compras mínimas de Q100</h5>
                  <p>Con Shell Select</p>
                </CardComponent>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div className="drop-down">
        <Container className="container-drop">
          <div>
            <h1>Todos los {"\n"} negocios</h1>
          </div>
          <div>
            <AccordionComponent Name="Organizar">
              <RadioComponent></RadioComponent>
            </AccordionComponent>
          </div>
          <div>
            <AccordionComponent Name="De Uber Eats">
              <Form>
                <Form.Check
                  className="switch-boton"
                  type="switch"
                  id="custom-switch"
                  label="Ofertas"
                />

                <Form.Check
                  className="switch-boton"
                  type="switch"
                  id="custom-switch"
                  label="Mejor valorados"
                />
              </Form>
            </AccordionComponent>
          </div>
          <div>
            <AccordionComponent Name="Rango de precios">
              <div className="botones-precio">
                <Button variant="light">Q</Button>
                <Button variant="light">QQ</Button>
                <Button variant="light">QQQ</Button>
                <Button variant="light">QQQQ</Button>
              </div>
            </AccordionComponent>
          </div>
          <div>
            <AccordionComponent Name="Costo de envío máx">
              <Form.Label></Form.Label>
              <Form.Range />
            </AccordionComponent>
          </div>
          <div>
            <AccordionComponent Name="Tipo de dieta">
              <Button variant="light">
                <Image
                  className="imagenes-boton"
                  src="https://www.svgrepo.com/show/70929/leaf.svg"
                />{" "}
                Vegetariana
              </Button>
              <Button variant="light">
                <Image
                  className="imagenes-boton"
                  src="https://i.pinimg.com/originals/9b/52/1d/9b521dbe07790b0ae4f4a36e578674c4.png"
                />{" "}
                Vegana
              </Button>
              <div>
                <Button variant="light">
                  <Image
                    className="imagenes-boton"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/NounProject_Leaves.svg/512px-NounProject_Leaves.svg.png"
                  />
                  Sin gluten
                </Button>
              </div>
            </AccordionComponent>
          </div>
        </Container>
        <div>
          <Container>
            <h1>Opciones más populares: Desayuno y brunch</h1>
            <Row xs={1} md={6} className="g-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                  <CardComponent img="https://d1ralsognjng37.cloudfront.net/eee8f944-247a-407f-8814-3501ac5d6916.jpeg"></CardComponent>
                  <h4>Pollo Campero - Zona 12 Petapa</h4>
                </Col>
              ))}
            </Row>
            <h1>Ofertas de hoy</h1>
            <Row xs={1} md={6} className="g-4">
              <Col>
                <CardComponent img="https://d1ralsognjng37.cloudfront.net/57ad101e-0a44-4a63-a1cb-19cd02ae05ae.jpeg">
                  <h1>jdkfsafjdaskljdssldkjfslkdf</h1>
                </CardComponent>
              </Col>
              <Col>
                <CardComponent
                  img="https://d1ralsognjng37.cloudfront.net/57ad101e-0a44-4a63-a1cb-19cd02ae05ae.jpeg"
                  tituloBadge="tituloBadge"
                ></CardComponent>
              </Col>
              <Col>
                <CardComponent
                  img="https://d1ralsognjng37.cloudfront.net/57ad101e-0a44-4a63-a1cb-19cd02ae05ae.jpeg"
                  tituloBoton="tituloboton"
                >
                  <CardComponent
                    img="https://d1ralsognjng37.cloudfront.net/57ad101e-0a44-4a63-a1cb-19cd02ae05ae.jpeg"
                    tituloBadge="tituloBadge"
                  ></CardComponent>
                </CardComponent>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
