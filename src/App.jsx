import Banner from './components/Banner/Banner';
import Certificaciones from './components/Certificaciones/Certificaciones';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
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
      <Proyectos />
      <Habilidades />
      <Certificaciones />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;