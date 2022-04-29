export default function setup({
  quantity,
  setQuantity,
  selectedImage,
  setSelectedImage,
  pictures,
  productsInCart,
  setProductsInCart,
  dummyProduct,
}) {
  return {
    thumbnailToBigImage (image) {
      return image.replace('-thumbnail', '');
    },

    handleQuantity (increment) {
      if (!increment && quantity > 0)setQuantity(quantity - 1);
      else if (increment) setQuantity(quantity + 1);
    },

    nextPicture (sign) {
      if (sign === '+') setSelectedImage(pictures.length === selectedImage + 1 ? selectedImage : selectedImage + 1);
      else setSelectedImage(selectedImage - 1 < 0 ? 0 : selectedImage - 1);
    },

    handleAddToCart () {
      if (quantity === 0) {
        alert('Please, select at least one item');
        return;
      }

      if (productsInCart.length > 0) {
        setProductsInCart([{
          ...productsInCart[0],
          quantity,
        }]);
        setQuantity(0);
        return;
      }

      setProductsInCart([...productsInCart, {
        ...dummyProduct,
        quantity,
      }]);
      setQuantity(0);
    },
  };
}
