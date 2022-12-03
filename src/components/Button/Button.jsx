import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { BtnIcons, Icons, LoadBtn } from './Button.styled';
import { deleteTodo } from '../../redux/store';

export const LoadMoreBtn = ({ onClick }) => {
  const dispatch = useDispatch();
  return (
    <LoadBtn
      type="button"
      onClick={() => {
        dispatch(deleteTodo(2));
        return onClick;
      }}
    >
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
