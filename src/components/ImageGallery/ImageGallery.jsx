import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImgGalleryList } from './ImageGallery.styled';

export const Gallery = ({ data: { hits = [] }, onOpenModal }) => {
  return (
    <ImgGalleryList>
      {hits.map(item => {
        return (
          <GalleryItem
            onOpenModal={onOpenModal}
            key={item.id}
            img={item.webformatURL}
            name={item.tags}
            largeImg={item.largeImageURL}
          />
        );
      })}
    </ImgGalleryList>
  );
};
