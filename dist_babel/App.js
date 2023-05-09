"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;
var _react = _interopRequireWildcard(require("react"));
require("primereact/resources/themes/lara-light-indigo/theme.css");
require("primereact/resources/primereact.min.css");
var _navbar = _interopRequireDefault(require("./components/navbar.js"));
var _Container = _interopRequireDefault(require("react-bootstrap/Container"));
var _Row = _interopRequireDefault(require("react-bootstrap/Row"));
var _Col = _interopRequireDefault(require("react-bootstrap/Col"));
var _CardComponent = _interopRequireDefault(require("./components/CardComponent.js"));
var _Button = _interopRequireDefault(require("react-bootstrap/Button"));
var _SeachbarComponent = _interopRequireDefault(require("./components/SeachbarComponent.js"));
var _Image = _interopRequireDefault(require("react-bootstrap/Image"));
var _Stack = _interopRequireDefault(require("react-bootstrap/Stack"));
var _Badge = _interopRequireDefault(require("react-bootstrap/Badge"));
require("./App.scss");
var _AccordionComponent = _interopRequireDefault(require("./components/AccordionComponent.js"));
var _RadioComponent = _interopRequireDefault(require("./components/RadioComponent.js"));
var _Form = _interopRequireDefault(require("react-bootstrap/Form"));
var _CardOfertasComponent = _interopRequireDefault(require("./components/CardOfertasComponent.js"));
var _reactBurgerMenu = require("react-burger-menu");
require("https://fonts.cdnfonts.com/css/uber-move-text");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//theme

//core

var iconosComida = [{
  nombre: "Ofertas",
  desc: "",
  img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/deals.png"
}, {
  nombre: "Express",
  desc: "",
  img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/convenience.png"
}, {
  nombre: "Alcohol",
  desc: "",
  img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/alcohol.png"
}, {
  nombre: "Pizza",
  desc: "",
  img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/pizza.png"
}, {
  nombre: "Mascotas",
  desc: "",
  img: "https://cn-geo1.uber.com/static/mobile-content/eats/pet_supplies.png"
}, {
  nombre: "Mejor Valorados",
  desc: "",
  img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/top_eats.png"
}, {
  nombre: "Sushi",
  desc: "",
  img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/sushi.png"
}, {
  nombre: "Postres",
  desc: "",
  img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/dessert.png"
}, {
  nombre: "China",
  desc: "",
  img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/chinese.png"
}, {
  nombre: "Té de burbujas",
  desc: "",
  img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/bubbletea.png"
}, {
  nombre: "Opciones Saludables",
  desc: "",
  img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/healthy.png"
}, {
  nombre: "Alitas",
  desc: "",
  img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/wings.png"
}, {
  nombre: "Comida rápida",
  desc: "",
  img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/fastfood.png"
}, {
  nombre: "India",
  desc: "",
  img: "  https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/indian.png"
}, {
  nombre: "Comida reconfortante",
  desc: "",
  img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/comfortfood.png"
}, {
  nombre: "Cafe y Té",
  desc: "",
  img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/coffeeandtea.png"
}, {
  nombre: "Asiática",
  desc: "",
  img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/asian.png"
}, {
  nombre: "Mexicana",
  desc: "",
  img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/mexican.png"
}];
var IconoComida = function IconoComida(props) {
  var comida = props.comida;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col["default"], {
    className: "icono-comida",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Stack["default"], {
      gap: 3,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Image["default"], {
        className: "icono-imagen",
        src: comida.img,
        roundedCircle: true
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "",
        children: comida.nombre
      })]
    })
  });
};
var cardComida = [{
  id: "1",
  body: "Mcdonald's - Ciudad Real",
  desc: "Costo de envío: ",
  tituloBadge: "",
  tituloboton: "https://www.svgrepo.com/download/13666/heart.svg",
  costo: "Q6 • ",
  rating: "4.6",
  tiempo: "20-35 min",
  img: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kdXl0NGg5bmZuajUwLmNsb3VkZnJvbnQubmV0L3Jlc2l6ZWQvMTUzMTE3OTY0MjYzOC13NTUwLTRkLmpwZw=="
}, {
  id: "2",
  body: "San Martín - Petapa",
  desc: "Costo de envío: ",
  tituloBadge: "",
  tituloboton: "https://www.svgrepo.com/download/13666/heart.svg",
  costo: "Q6 • ",
  rating: "4.7",
  tiempo: "20-40 min",
  img: "https://d1ralsognjng37.cloudfront.net/70ac3aa7-1d2e-4792-84b5-ddf30adf248b.jpeg"
}, {
  id: "3",
  body: "Pollo Campero - C.C Plaza Atanasio",
  desc: "Costo de envío: ",
  tituloBadge: "",
  tituloboton: "https://www.svgrepo.com/download/13666/heart.svg",
  costo: "Q6 • ",
  rating: "4.5",
  tiempo: "20-35 min",
  img: "https://d1ralsognjng37.cloudfront.net/d2ffb26c-3997-45f7-a1a8-f7f57809cd97.jpeg"
}, {
  id: "4",
  body: "Wendy's - Aguilar Batres",
  desc: "Costo de envío: ",
  tituloBadge: "",
  tituloboton: "https://www.svgrepo.com/download/13666/heart.svg",
  costo: "Q12 • ",
  rating: "4.7",
  tiempo: "40-55 min",
  img: "https://tb-static.uber.com/prod/image-proc/processed_images/80aa589feb4f494a2962d92e391e8bcb/ffd640b0f9bc72838f2ebbee501a5d4b.jpeg"
}];
var cardComidaFavorita = [{
  id: "1",
  body: "San Martín - Petapa",
  desc: "Costo de envío: ",
  tituloBadge: "",
  tituloboton: "https://www.svgrepo.com/download/13666/heart.svg",
  costo: "Q6 • ",
  rating: "4.7",
  tiempo: "20-40 min",
  img: "https://d1ralsognjng37.cloudfront.net/70ac3aa7-1d2e-4792-84b5-ddf30adf248b.jpeg"
}, {
  id: "2",
  body: "Starbucks Américas",
  desc: "Costo de envío: ",
  tituloBadge: "",
  tituloboton: "https://www.svgrepo.com/download/13666/heart.svg",
  costo: "Q11 • ",
  rating: "4.8",
  tiempo: "35-50 min",
  img: "https://d1ralsognjng37.cloudfront.net/7f2b0b76-7059-4b29-8ba3-1f643125eed3.jpeg"
}, {
  id: "3",
  body: "Muriel Postres Gourmet",
  desc: "Costo de envío: ",
  tituloBadge: "",
  tituloboton: "https://www.svgrepo.com/download/13666/heart.svg",
  costo: "Q12 • ",
  rating: "4.8",
  tiempo: "45-60 min",
  img: "https://d1ralsognjng37.cloudfront.net/0a97850f-1e51-4501-8ad5-45ba0366b2c0"
}, {
  id: "4",
  body: "Tre fratellli - Pradera Vistares",
  desc: "Costo de envío: ",
  tituloBadge: "",
  tituloboton: "https://www.svgrepo.com/download/13666/heart.svg",
  costo: "Q12 • ",
  rating: "4.7",
  tiempo: "35-50 min",
  img: "https://tb-static.uber.com/prod/image-proc/processed_images/124dfaf6e2598785e17d840d919ebed5/97ef7458dde62fa918635bc21265d9f5.jpeg"
}];
var cardOfertasHoy = [{
  id: "1",
  body: "Subway - El Recreo",
  desc: "Costo de envío: ",
  tituloBadge: "Ahorros exclusivos",
  tituloboton: "https://www.svgrepo.com/download/13666/heart.svg",
  costo: "Q12 • ",
  rating: "4.7",
  tiempo: "20-40 min",
  img: "https://d1ralsognjng37.cloudfront.net/d5a8ada3-0d95-474f-b24c-4c48625060cb.jpeg"
}, {
  id: "2",
  body: "Plantiful - Zona 14",
  desc: "Costo de envío: ",
  tituloBadge: "Costo de envío de Q 0 (gasto de Q 65)",
  tituloboton: "https://www.svgrepo.com/download/13666/heart.svg",
  costo: "Q12 • ",
  rating: "",
  tiempo: "40-55 min",
  img: "https://tb-static.uber.com/prod/image-proc/processed_images/afde9163e4bb34cd6545b91a5fccf761/ffd640b0f9bc72838f2ebbee501a5d4b.jpeg"
}, {
  id: "3",
  body: "Marcas Mundiales (Zona 9)",
  desc: "Costo de envío: ",
  tituloBadge: "Costo de envío de Q 0 (gasto de Q 65)",
  tituloboton: "https://www.svgrepo.com/download/13666/heart.svg",
  costo: "Q12 • ",
  rating: "5.0",
  tiempo: "45-60 min",
  img: "https://tb-static.uber.com/prod/image-proc/processed_images/9ed68b28a98f0fe6ba8c39d6f9e34925/97ef7458dde62fa918635bc21265d9f5.jpeg"
}];
function App() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "page-wrapper",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "ham-wrapper",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBurgerMenu.slide, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
            variant: "dark",
            children: "Reg\xEDstrate"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
            variant: "light",
            children: "Iniciar Sesi\xF3n"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: "Crear una cuenta de negocios"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: "Agrega tu restaurante"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: "Reg\xEDstrate para realizar entregas"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "div-footer",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Image["default"], {
              className: "imagen-footer",
              src: "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/31ee382bd0e6ed84.svg"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              children: "Hay mucho m\xE1s"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              children: "que te encantar\xE1 en la app"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
              variant: "light",
              children: "iPhone"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
              variant: "light",
              children: "Android"
            })]
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_navbar["default"], {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "wrap-buttons",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
              variant: "light",
              children: "Entrega a domicilio"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
              variant: "light",
              children: "Recolectar"
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "button-direccion",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
            variant: "light",
            children: "3ra Calle A \u2022 Ahora"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SeachbarComponent["default"], {})
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Button["default"], {
            variant: "dark",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Image["default"], {
              className: "carrito",
              src: "https://cdn-icons-png.flaticon.com/512/1124/1124199.png"
            }), "Carrito \u2022 0"]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Button["default"], {
            variant: "light",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Image["default"], {
              className: "sesion",
              src: "https://icons.veryicon.com/png/o/miscellaneous/domain-icons/my-account-login.png"
            }), "Iniciar sesi\xF3n"]
          }), " "]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
            variant: "light",
            children: "Reg\xEDstrate"
          }), " "]
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "menu-wrapper",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Row["default"], {
        className: "menu-iconos-header",
        children: iconosComida.map(function (comida) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(IconoComida, {
            comida: comida
          }, comida.nombre);
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "cartas-principales",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Row["default"], {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Col["default"], {
          xs: 4,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
            children: " \xBFSe te antoja? P\xEDdelo"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: " Busca un restaurante, tipo de comida o plato favorito"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col["default"], {
          xs: 4,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_CardOfertasComponent["default"], {
            img: "https://d1g1f25tn8m2e6.cloudfront.net/bca9b7f3-1e95-4b71-a816-3343a96dd6dd.jpg",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h2", {
              children: [" ", "Disfruta de 4 Muffin de Huevo y Jam\xF3n + 4 Galletas a Q108", " "]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              children: " Subway "
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col["default"], {
          xs: 4,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_CardOfertasComponent["default"], {
            img: "https://d1g1f25tn8m2e6.cloudfront.net/a89b72d3-408e-4754-9950-b5f2c999ab42.jpg",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
              children: " \xA1Disfruta tus desayunos favoritos 2x1! "
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              children: " Trefrateli "
            })]
          })
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "drop-down",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Container["default"], {
        className: "container-drop",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("h1", {
            children: ["Todos los ", "\n", " negocios"]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AccordionComponent["default"], {
            Name: "Organizar",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RadioComponent["default"], {})
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AccordionComponent["default"], {
            Name: "De Uber Eats",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Form["default"], {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
                children: ["Ofertas", /*#__PURE__*/(0, _jsxRuntime.jsx)(_Form["default"].Check, {
                  className: "switch-boton",
                  type: "switch",
                  id: "custom-switch"
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
                children: ["Mejor Valorados", /*#__PURE__*/(0, _jsxRuntime.jsx)(_Form["default"].Check, {
                  className: "switch-boton",
                  type: "switch",
                  id: "custom-switch"
                })]
              })]
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AccordionComponent["default"], {
            Name: "Rango de precios",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "botones-precio",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
                variant: "light",
                children: "Q"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
                variant: "light",
                children: "QQ"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
                variant: "light",
                children: "QQQ"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
                variant: "light",
                children: "QQQQ"
              })]
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_AccordionComponent["default"], {
            Name: "Costo de env\xEDo m\xE1x",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Form["default"].Label, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Form["default"].Range, {})]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_AccordionComponent["default"], {
            Name: "Tipo de dieta",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Button["default"], {
              variant: "light",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Image["default"], {
                className: "imagenes-boton",
                src: "https://www.svgrepo.com/show/70929/leaf.svg"
              }), " ", "Vegetariana"]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Button["default"], {
              variant: "light",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Image["default"], {
                className: "imagenes-boton",
                src: "https://i.pinimg.com/originals/9b/52/1d/9b521dbe07790b0ae4f4a36e578674c4.png"
              }), " ", "Vegana"]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Button["default"], {
                variant: "light",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Image["default"], {
                  className: "imagenes-boton",
                  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/NounProject_Leaves.svg/512px-NounProject_Leaves.svg.png"
                }), "Sin gluten"]
              })
            })]
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
            children: "Opciones m\xE1s populares: Desayuno y brunch"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container["default"], {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "menu-wrapper-cards",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Row["default"], {
                xs: 2,
                md: 4,
                className: "menu-cardComida",
                children: cardComida.map(function (card) {
                  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col["default"], {
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CardComponent["default"], {
                      card: card
                    }, card.nombre)
                  });
                })
              })
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
          children: "Populares cerca de ti"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container["default"], {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "menu-wrapper-cards",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Row["default"], {
              xs: 2,
              md: 4,
              className: "menu-cardComida",
              children: cardComidaFavorita.map(function (card) {
                return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col["default"], {
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CardComponent["default"], {
                    card: card
                  }, card.nombre)
                });
              })
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
          children: "Ofertas de hoy"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container["default"], {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "menu-wrapper-cards",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Row["default"], {
              xs: 2,
              md: 4,
              className: "menu-cardComida",
              children: cardOfertasHoy.map(function (card) {
                return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col["default"], {
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CardComponent["default"], {
                    card: card
                  }, card.nombre)
                });
              })
            })
          })
        })]
      })]
    })]
  });
}