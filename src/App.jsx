import { useState } from 'react'
import './App.css'
import {  Container} from "react-bootstrap";
import FormularioColores from './components/FormularioColores';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    < >
    <Container className=''>
      <FormularioColores/>
    </Container>
      
    </>
  )
}

export default App