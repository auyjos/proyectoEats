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
import CardOfertas from "./components/CardOfertasComponent.js";
import { slide as Menu } from "react-burger-menu";

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

const cardComida = [
  {
    id: "1",
    body: "Mcdonald's - Ciudad Real",
    desc: "Costo de envío: ",
    tituloBadge: "",
    tituloboton: "https://www.svgrepo.com/download/13666/heart.svg",
    costo: "Q6 • ",
    rating: "4.6",
    tiempo: "20-35 min",
    img: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kdXl0NGg5bmZuajUwLmNsb3VkZnJvbnQubmV0L3Jlc2l6ZWQvMTUzMTE3OTY0MjYzOC13NTUwLTRkLmpwZw==",
  },
  {
    id: "2",
    body: "San Martín - Petapa",
    desc: "Costo de envío: ",
    tituloBadge: "",
    tituloboton: "https://www.svgrepo.com/download/13666/heart.svg",
    costo: "Q6 • ",
    rating: "4.7",
    tiempo: "20-40 min",
    img: "https://d1ralsognjng37.cloudfront.net/70ac3aa7-1d2e-4792-84b5-ddf30adf248b.jpeg",
  },

  {
    id: "3",
    body: "Pollo Campero - C.C Plaza Atanasio",
    desc: "Costo de envío: ",
    tituloBadge: "",
    tituloboton: "https://www.svgrepo.com/download/13666/heart.svg",
    costo: "Q6 • ",
    rating: "4.5",
    tiempo: "20-35 min",
    img: "https://d1ralsognjng37.cloudfront.net/d2ffb26c-3997-45f7-a1a8-f7f57809cd97.jpeg",
  },

  {
    id: "4",
    body: "Wendy's - Aguilar Batres",
    desc: "Costo de envío: ",
    tituloBadge: "",
    tituloboton: "https://www.svgrepo.com/download/13666/heart.svg",
    costo: "Q12 • ",
    rating: "4.7",
    tiempo: "40-55 min",
    img: "https://tb-static.uber.com/prod/image-proc/processed_images/80aa589feb4f494a2962d92e391e8bcb/ffd640b0f9bc72838f2ebbee501a5d4b.jpeg",
  },
];

const cardComidaFavorita = [
  {
    id: "1",
    body: "San Martín - Petapa",
    desc: "Costo de envío: ",
    tituloBadge: "",
    tituloboton: "https://www.svgrepo.com/download/13666/heart.svg",
    costo: "Q6 • ",
    rating: "4.7",
    tiempo: "20-40 min",
    img: "https://d1ralsognjng37.cloudfront.net/70ac3aa7-1d2e-4792-84b5-ddf30adf248b.jpeg",
  },
  {
    id: "2",
    body: "Starbucks Américas",
    desc: "Costo de envío: ",
    tituloBadge: "",
    tituloboton: "https://www.svgrepo.com/download/13666/heart.svg",
    costo: "Q11 • ",
    rating: "4.8",
    tiempo: "35-50 min",
    img: "https://d1ralsognjng37.cloudfront.net/7f2b0b76-7059-4b29-8ba3-1f643125eed3.jpeg",
  },
  {
    id: "3",
    body: "Muriel Postres Gourmet",
    desc: "Costo de envío: ",
    tituloBadge: "",
    tituloboton: "https://www.svgrepo.com/download/13666/heart.svg",
    costo: "Q12 • ",
    rating: "4.8",
    tiempo: "45-60 min",
    img: "https://d1ralsognjng37.cloudfront.net/0a97850f-1e51-4501-8ad5-45ba0366b2c0",
  },
  {
    id: "4",
    body: "Tre fratellli - Pradera Vistares",
    desc: "Costo de envío: ",
    tituloBadge: "",
    tituloboton: "https://www.svgrepo.com/download/13666/heart.svg",
    costo: "Q12 • ",
    rating: "4.7",
    tiempo: "35-50 min",
    img: "https://tb-static.uber.com/prod/image-proc/processed_images/124dfaf6e2598785e17d840d919ebed5/97ef7458dde62fa918635bc21265d9f5.jpeg",
  },
];
const cardOfertasHoy = [
  {
    id: "1",
    body: "Subway - El Recreo",
    desc: "Costo de envío: ",
    tituloBadge: "Ahorros exclusivos",
    tituloboton: "https://www.svgrepo.com/download/13666/heart.svg",
    costo: "Q12 • ",
    rating: "4.7",
    tiempo: "20-40 min",
    img: "https://d1ralsognjng37.cloudfront.net/d5a8ada3-0d95-474f-b24c-4c48625060cb.jpeg",
  },

  {
    id: "2",
    body: "Plantiful - Zona 14",
    desc: "Costo de envío: ",
    tituloBadge: "Costo de envío de Q 0 (gasto de Q 65)",
    tituloboton: "https://www.svgrepo.com/download/13666/heart.svg",
    costo: "Q12 • ",
    rating: "",
    tiempo: "40-55 min",
    img: "https://tb-static.uber.com/prod/image-proc/processed_images/afde9163e4bb34cd6545b91a5fccf761/ffd640b0f9bc72838f2ebbee501a5d4b.jpeg",
  },
  {
    id: "3",
    body: "Marcas Mundiales (Zona 9)",
    desc: "Costo de envío: ",
    tituloBadge: "Costo de envío de Q 0 (gasto de Q 65)",
    tituloboton: "https://www.svgrepo.com/download/13666/heart.svg",
    costo: "Q12 • ",
    rating: "5.0",
    tiempo: "45-60 min",
    img: "https://tb-static.uber.com/prod/image-proc/processed_images/9ed68b28a98f0fe6ba8c39d6f9e34925/97ef7458dde62fa918635bc21265d9f5.jpeg",
  },
];
export default function App() {
  return (
    <>
      <div className="page-wrapper">
        <div className="ham-wrapper">
          <Menu>
            <Button variant="dark">Regístrate</Button>
            <Button variant="light">Iniciar Sesión</Button>
            <p>Crear una cuenta de negocios</p>
            <p>Agrega tu restaurante</p>
            <p>Regístrate para realizar entregas</p>
            <div className="div-footer">
              <Image
                className="imagen-footer"
                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/31ee382bd0e6ed84.svg"
              />
              <p>Hay mucho más</p>
              <p>que te encantará en la app</p>
              <Button variant="light">iPhone</Button>
              <Button variant="light">Android</Button>
            </div>
          </Menu>
        </div>
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

      <div className="menu-wrapper">
        <Row className="menu-iconos-header">
          {iconosComida.map((comida) => {
            return <IconoComida key={comida.nombre} comida={comida} />;
          })}
        </Row>
      </div>

      <div className="cartas-principales">
        <Row>
          <Col xs={4}>
            <h2> ¿Se te antoja? Pídelo</h2>
            <p> Busca un restaurante, tipo de comida o plato favorito</p>
          </Col>

          <Col xs={4}>
            <CardOfertas img="https://d1g1f25tn8m2e6.cloudfront.net/bca9b7f3-1e95-4b71-a816-3343a96dd6dd.jpg">
              <h2>
                {" "}
                Disfruta de 4 Muffin de Huevo y Jamón + 4 Galletas a Q108{" "}
              </h2>
              <p> Subway </p>
            </CardOfertas>
          </Col>
          <Col xs={4}>
            <CardOfertas img="https://d1g1f25tn8m2e6.cloudfront.net/a89b72d3-408e-4754-9950-b5f2c999ab42.jpg">
              <h2> ¡Disfruta tus desayunos favoritos 2x1! </h2>
              <p> Trefrateli </p>
            </CardOfertas>
          </Col>
        </Row>
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
                <p>
                  Ofertas
                  <Form.Check
                    className="switch-boton"
                    type="switch"
                    id="custom-switch"
                  />
                </p>

                <p>
                  Mejor Valorados
                  <Form.Check
                    className="switch-boton"
                    type="switch"
                    id="custom-switch"
                  />
                </p>
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
          <div>
            <h1>Opciones más populares: Desayuno y brunch</h1>
            <Container>
              <div className="menu-wrapper-cards">
                <Row xs={2} md={4} className="menu-cardComida">
                  {cardComida.map((card) => {
                    return (
                      <Col>
                        <CardComponent key={card.nombre} card={card} />
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </Container>
          </div>

          <h1>Populares cerca de ti</h1>
          <Container>
            <div className="menu-wrapper-cards">
              <Row xs={2} md={4} className="menu-cardComida">
                {cardComidaFavorita.map((card) => {
                  return (
                    <Col>
                      <CardComponent key={card.nombre} card={card} />
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Container>

          <h1>Ofertas de hoy</h1>
          <Container>
            <div className="menu-wrapper-cards">
              <Row xs={2} md={4} className="menu-cardComida">
                {cardOfertasHoy.map((card) => {
                  return (
                    <Col>
                      <CardComponent key={card.nombre} card={card} />
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
