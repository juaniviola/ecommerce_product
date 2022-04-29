import { useState } from 'react';
import './ModalImages.css';
import pictures from '../../dummyPictures';
import modules from './modules';

export default function ModalImages({ setOpenModal }) {
  const [selectedImage, setSelectedImage] = useState(0);

  const { handleSelectedImage, thumbnailToBigImage } = modules({
    selectedImage,
    setSelectedImage,
    pictures,
  });

  return (
    <div className="modal_images_container">
      <img
        onClick={setOpenModal}
        className="modal_images_icon_close"
        src="/icons/close_white.svg"
        width={24}
        height={24}
      />

      <div className="modal_images_big_picture">
        <button className="modal_left_button" onClick={() => handleSelectedImage('-')}>
          <img src="/icons/left_black.svg" width="24" height="24" />
        </button>

        <img src={thumbnailToBigImage(pictures[selectedImage])} width="400" height="400" />

        <button className="modal_right_button" onClick={() => handleSelectedImage('+')}>
          <img src="/icons/next_black.svg" width="24" height="24" />
        </button>
      </div>

      <div className="modal_images_small_pictures">
        {pictures.map((picture) => {
          return (
            <img key={picture} src={picture} width="70" height="70" />
          );
        })}
      </div>
    </div>
  );
}
