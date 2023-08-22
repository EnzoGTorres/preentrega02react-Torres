import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  
  return (

    <BrowserRouter>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a la tienda de ropa exclusiva más importante del oeste argentino"/>
      <Footer />
    </BrowserRouter>

  );
}


export default App;
