import { useState } from 'react';
import './Header.css';
import modules from './modules';

export default function Header({ productsInCart, setProductsInCart }) {
  const [menuActive, setMenuActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);

  const { handleMenuActive, handleDeleteFromCart } = modules({
    menuActive,
    cartActive,
    setMenuActive,
    setCartActive,
    setProductsInCart
  });

  return (
    <div className='header_container'>
      <div className='header_wrapper'>
        <div className='header_burger'>
          <div onClick={handleMenuActive}>
            <img src="/icons/menu.svg" height={24} width={24} />
          </div>
        </div>

        <div className='header_title'>
          <h2>sneakers</h2>
        </div>

        <div className='header_buttons'>
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="header_picture">
        {productsInCart.length > 0 ? (
          <div className="header_notification">
            <span>{productsInCart.length}</span>
          </div>
        ) : null}

        <img
          src='/icons/shopping_cart.svg'
          onClick={() => setCartActive(!cartActive)}
          width={24}
          height={24}
          alt='cart'
        />
        <img src='/images/image-avatar.png' width={32} height={32} alt='profile' />
      </div>

      <div className={menuActive ? "header_sidebar hide_scrollbar" : "header_hidden"}>
        <div className="header_content">
          <img
            src='/icons/close_menu.svg'
            width={24}
            height={24}
            onClick={handleMenuActive}
          />

          <nav>
            <a href="#">Collections</a>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </div>

      {cartActive ? (
        <div className="header_cart">
          <h3>Cart</h3>
          <div className="line"></div>

          {productsInCart.length > 0 ? (
            <div className="header_cart_product">
              {productsInCart.map((product) => {
                return (
                  <div key={product.name} className="header_cart_products">
                    <img src={product.img} height={40} width={40} />

                    <div className="header_cart_products_info">
                      <span>{product.name}</span>
                      <span>${product.price} x {product.quantity} <b>${product.total}</b></span>
                    </div>

                    <img
                      onClick={handleDeleteFromCart}
                      src="icons/delete.svg"
                      width={24}
                      height={24}
                    />
                  </div>
                );
              })}

              <button className="header_cart_checkout">Checkout</button>
            </div>
          ) : (
            <div className="header_cart_empty">
              <span>Your cart is empty.</span>
            </div>
          )}

        </div>
      ) : null}
    </div>
  );
}
