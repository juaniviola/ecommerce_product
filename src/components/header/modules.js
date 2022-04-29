export default function setup({ menuActive, cartActive, setMenuActive, setCartActive, setProductsInCart }) {
  return {
    handleMenuActive() {
      setMenuActive(!menuActive);
      if (cartActive) {
        setCartActive(false);
      }

      document.getElementsByTagName('body')[0].style.overflow = !menuActive ? 'hidden' : '';
    },

    handleDeleteFromCart() {
      setProductsInCart([]);
    },
  };
}
