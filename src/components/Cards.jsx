import { Container, Row, Col  } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <Container>
      <Row>

      <Col  xs={12} md={4}>
    <Card className='shadow'>
      <Card.Body>
        <Card.Title>Nombre Color</Card.Title>
        <hr />
        <div style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'violet'
          }} />

    <div className="d-flex justify-content-end mt-3">
      <Button>Enviar</Button>
    </div>
      </Card.Body>
    </Card>
    </Col>

    <Col  xs={12} md={4}>
    <Card className='shadow'>
      <Card.Body>
        <Card.Title>Nombre Color</Card.Title>
        <hr />
        <div style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'red'
          }} />
        <div className="d-flex justify-content-end mt-3">
      <Button className=''>Enviar</Button>
    </div>
      </Card.Body>
    </Card>
    </Col>

    <Col  xs={12} md={4}>
    <Card className='shadow'>
      <Card.Body>
        <Card.Title>Nombre Color</Card.Title>
        <hr />
        <div style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'green'
          }} />
       <div className="d-flex justify-content-end mt-3">
      <Button className=''>Enviar</Button>
    </div>
      </Card.Body>
    </Card>
    </Col>
    </Row>
   
    </Container>
  );
}

export default Cards;