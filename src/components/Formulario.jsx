import React from 'react';
import { Row, Col, FormControl, Button } from 'react-bootstrap';

const Formulario = () => {
 // Lógica del componente

 return (
 // JSX a renderizar
 <div className='colordelform shadow m-5 p-3 rounded'>
      <Row className='m-2 pt-4'>
        <Col xs="auto">
          <div style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'blue'
          }} />
        </Col>
        <Col>
          <FormControl type="text" placeholder='Ingrese un color' className='pt-4 mt-4'/>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col xs="auto">
          <Button type='submit'>Enviar</Button>
        </Col>
      </Row>
    </div>
 );
};

export default Formulario;
