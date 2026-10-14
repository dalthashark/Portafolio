import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      {/* El resto de secciones irán aquí debajo.
          Ejemplo: <Footer />
      */}
    </>
  );
}

export default App;