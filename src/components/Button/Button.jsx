import PropTypes from 'prop-types';
import { BtnIcons, Icons, LoadBtn } from './Button.styled';
import { useSelector } from 'react-redux';
import { tasksSelector } from 'redux/selectors';

export const LoadMoreBtn = ({ onClick }) => {
  const value = useSelector(tasksSelector);
  console.log(value);

  return (
    <LoadBtn type="button" onClick={onClick}>
      Load more
    </LoadBtn>
  );
};

export const SerchButton = () => {
  return (
    <BtnIcons type="submit">
      <Icons />
    </BtnIcons>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
