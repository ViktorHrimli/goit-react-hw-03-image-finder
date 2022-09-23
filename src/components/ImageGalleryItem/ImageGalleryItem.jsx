import { ListItem } from './ImageGalleryItem.styled';

export const GalleryItem = ({ img, name, largeImg, onOpenModal }) => {
  return (
    <ListItem>
      <a onClick={onOpenModal} name={largeImg} href={largeImg}>
        <img src={img} alt={name} />
      </a>
    </ListItem>
  );
};
