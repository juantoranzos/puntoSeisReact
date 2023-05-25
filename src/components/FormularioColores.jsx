import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../formulario.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ListaColores from "./ListaColores";

let colorCuadro = "";
const FormularioColores = () => {
  let coloresLocalStorage =
    JSON.parse(localStorage.getItem("listaColores")) || [];
  let listaColores = [
    "rojo",
    "verde",
    "amarillo",
    "azul",
    "blanco",
    "celeste",
    "gris",
    "negro",
    "marron",
    "naranja",
    "rosa",
    "morado",
    "plateado",
  ];
  let colorList = [
    "red",
    "green",
    "yellow",
    "blue",
    "white",
    "skyblue",
    "gray",
    "black",
    "brown",
    "orange",
    "pink",
    "purple",
    " silver",
  ];
  let posicion;
  const [color, setColor] = useState("");
  const [arrayColores, setArrayColores] = useState(coloresLocalStorage);
  
  
  useEffect(() => {
    
    localStorage.setItem("listaColores", JSON.stringify(arrayColores));
  }, [arrayColores]);

  
  const controlarColores = (e) => {
   
    let txtMin = color.toLowerCase();
    listaColores.map((col, index) => {
      if (col === txtMin) {
        posicion = index;
        return true;
      } else {
        return false;
      }
    });
    return posicion;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    posicion = controlarColores();
    canbiarColor();
    if (posicion != -1 && posicion != undefined) {
    
      setArrayColores([...arrayColores, colorList[posicion]]);
     
      setColor("");
    }
  };

  const eliminarColor = (idColor) => {
    let posicionColor = idColor.posicion;

    let coloresFiltradas = arrayColores.filter((itemColor, index) => {
      if (index != posicionColor) {
        return itemColor;
      }
    });
    setArrayColores(coloresFiltradas);
  };
  //canbia el color del cuadrado negro 
  const canbiarColor = () => {  
  let  posicion = controlarColores();
      colorCuadro = colorList[posicion]
  };
  return (
    <div>
      <Row className="   justify-content-center mt-5 ">
        <Col xs="11" sm="11" md="12" lg="10" className="bg-white m-0">
          <h3 className="text-center bg-white ">Bienvenido</h3>
          <hr />
          <Form className="bg-white " onSubmit={handleSubmit}>
            <Form.Group className="mb-3 bg-white">
              <Form.Label className=" bg-white text-center">
                Ingresa un Color 
              </Form.Label>
              <div className="d-flex ">
                <div
                  className="colorContainer"
                  style={{ background: `${colorCuadro}` }}
                ></div>
                <Form.Control
                  type="text"
                  placeholder="Ingrese un Color en español"
                  required
                  maxLength={100}
                  minLength={1}
                  className="bg-white h-25 align-self-center ms-3"
                  onChange={(e) => {
                    canbiarColor(e);
                    return setColor(e.target.value);
                  }}
                  value={color}
                />
              </div>
            </Form.Group>
            <div className="d-flex justify-content-center mb-5">
              <Button className="btn btn-danger " type="submit">
                Enviar
              </Button>
            </div>
          </Form>
        </Col>
        <section className="cajaContendor">
          <ListaColores
            listaColores={arrayColores}
            eliminarColor={eliminarColor}
          ></ListaColores>
        </section>
      </Row>
    </div>
  );
};

export default FormularioColores;