import { Formik } from 'formik';
import * as yup from 'yup';
import { Serchbar, InputForm, HeaderForm } from './Form.styled';
import { SerchButton } from 'components/Button/Button';

export const FormSerch = ({ onSubmit }) => {
  const schema = yup.object().shape({});
  const initialValue = {
    serchQuery: '',
  };

  const handleSubmiit = ({ serchQuery }, { resetForm }) => {
    onSubmit(serchQuery);
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
