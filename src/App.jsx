import './App.css'
import Cards from './components/Cards';
import Formulario from './components/Formulario'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <h2>Administrar colores</h2>
    <hr />
   <Formulario/>
   <hr />
   <Cards/>
   <hr />
   <footer className='bg-dark text-light '>
    <p className='text-center '>Todos los derechos reservados &copy;</p>
   </footer>
    </>
  )
}

export default App
