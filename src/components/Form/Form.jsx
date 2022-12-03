import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { Serchbar, InputForm, HeaderForm } from './Form.styled';
import { SerchButton } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { addTodo, addFilter } from '../../redux/store';

import { nanoid } from 'nanoid';

export const FormSerch = ({ onSubmit }) => {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    serchQuery: yup.string(),
  });
  const initialValue = {
    serchQuery: '',
  };

  const handleSubmiit = ({ serchQuery }, { resetForm }) => {
    const user = {
      id: nanoid(),
      text: nanoid() + 'name',
      completed: false,
    };
    dispatch(addTodo(user));

    if (serchQuery.trim() === '') {
      return toast.error('Required field', {
        theme: 'dark',
      });
    }
    dispatch(addFilter(serchQuery));
    onSubmit(serchQuery.trim());
    resetForm();
  };

  return (
    <HeaderForm>
      <Formik
        initialValues={initialValue}
        validationSchema={schema}
        onSubmit={handleSubmiit}
      >
        <Serchbar>
          <InputForm type="text" name="serchQuery" />
          <SerchButton />
        </Serchbar>
      </Formik>
    </HeaderForm>
  );
};

FormSerch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
