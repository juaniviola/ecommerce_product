import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Product from './components/product/Product';
import ModalImages from './components/product/modal/ModalImages';

function App() {
  const [productsInCart, setProductsInCart] = useState([]);
  const [modalImagesOpen, setModalImagesOpen] = useState(false);

  const handleSetModalImages = () => {
    const [body] = document.getElementsByTagName('body');
    if (body.clientWidth <= 600) return;

    setModalImagesOpen(!modalImagesOpen);
    if (!modalImagesOpen) {
      window.scrollTo(0, 0);
    }

    body.style.overflow = !modalImagesOpen ? 'hidden' : '';
  };

  return (
    <div className="App">
      {modalImagesOpen ? (
        <ModalImages setOpenModal={handleSetModalImages} modalImagesOpen={modalImagesOpen} />
      ) : null}
      <Header productsInCart={productsInCart} setProductsInCart={setProductsInCart} />
      <Product
        productsInCart={productsInCart}
        setProductsInCart={setProductsInCart}
        setModalImagesOpen={handleSetModalImages}
      />
    </div>
  );
}

export default App;
