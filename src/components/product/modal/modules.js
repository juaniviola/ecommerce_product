export default function setup({ selectedImage, setSelectedImage, pictures }) {
  return {
    handleSelectedImage (sign) {
      if (sign === '+') {
        setSelectedImage(selectedImage === pictures.length - 1 ? selectedImage : selectedImage + 1);
        return;
      }

      setSelectedImage(selectedImage === 0 ? 0 : selectedImage - 1);
    },

    thumbnailToBigImage (image) {
      return image.replace('-thumbnail', '');
    },
  };
}