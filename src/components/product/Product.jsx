import './Product.css';
import { useState } from 'react';
import modules from './modules';
import dummyProduct from '../dummyProducts';
import pictures from '../dummyPictures';

export default function Product ({ productsInCart, setProductsInCart, setModalImagesOpen }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const { thumbnailToBigImage, handleQuantity, nextPicture, handleAddToCart } = modules({
    dummyProduct,
    pictures,
    productsInCart,
    quantity,
    selectedImage,
    setProductsInCart,
    setQuantity,
    setSelectedImage,
  });

  return (
    <div className="product_container">
      <div className="product_picture_view">
        <div className="product_picture_big_image">
          <img
            onClick={setModalImagesOpen}
            src={thumbnailToBigImage(pictures[selectedImage])}
            alt="image"
            width={275}
            height={275}
          />
          <button className="left_button" onClick={() => nextPicture('-')}>
            <img src="icons/left_black.svg" width={24} height={24} />
          </button>
          <button className="right_button" onClick={() => nextPicture('+')}>
            <img src="icons/next_black.svg" width={24} height={24} />
          </button>
        </div>

        <div className="product_picture_small_images">
          {pictures.map((picture, index) => {
            return (
              <img
                className={selectedImage === index ? 'selected_image' : ''}
                key={picture}
                src={picture}
                alt="image"
                width={60}
                height={60}
                onClick={() => setSelectedImage(index)}
              />
            );
          })}
        </div>
      </div>

      <div className="product_description">
        <div className="product_description_title">
          <span>sneaker company</span>
          <h1>Fall Limited Edition Sneakers</h1>
        </div>
        <div className="product_description_p">
          <p>These low-profile sneakers are you perfect casual wear companion. Featuring a durable rubber outside sole, they'll withstand everything the weather can offer</p>
        </div>
        <div className="product_description_price">
          <div>
            <span>$125.00</span>
            <span>50%</span>
          </div>

          <span>$250.00</span>
        </div>
        <div className="product_description_buy">
          <div className="add_button">
            <button onClick={() => handleQuantity(false)}><span>-</span></button>
            <div><span>{quantity}</span></div>
            <button onClick={() => handleQuantity(true)}><span>+</span></button>
          </div>
          <div className="buy_button">
            <button onClick={handleAddToCart}>
              <img src="icons/shopping_cart_white.svg" width={16} height={16} />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
