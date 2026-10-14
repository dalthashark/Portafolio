import Banner from './components/Banner/Banner';
import Contacto from './components/Contacto/Contacto';
import Habilidades from './components/Habilidades/Habilidades';
import Navbar from './components/Navbar/Navbar';
import Perfil from './components/Perfil/Perfil';
import Proyectos from './components/Proyectos/Proyectos';
import './App.css';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Perfil />
      <Habilidades />
      <Proyectos />
      <Contacto />
    </>
  );
}

export default App;