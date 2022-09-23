import { BtnIcons, Icons } from './Button.styled';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Откріть модалку\закріть
    </button>
  );
};

export const SerchButton = () => {
  return (
    <BtnIcons type="submit">
      <Icons />
    </BtnIcons>
  );
};
