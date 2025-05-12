import PropTypes from 'prop-types';

import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { data } from 'react-router-dom';

function Form({
  schema,
  children,
  mode = 'all',
  onSubmit = () => {},
  submitContent,
}) {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: mode,
  });
  const { watch, getValues, handleSubmit, formState } = methods;
  const values = watch();

  const isFilled =
    Object.keys(values).length > 0 &&
    Object.values(values).every(
      (item) => item !== undefined && item !== null && item !== ''
    );
  const onSub = (data) => onSubmit(data);
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSub)}>
        {children}
        <button
          type="submit"
          className="Button-StyledButton"
          disabled={!isFilled || formState.isSubmitting}
        >
          {submitContent}
        </button>
      </form>
    </FormProvider>
  );
}

Form.propTypes = {
  schema: PropTypes.object.isRequired,
  children: PropTypes.node,
  mode: PropTypes.string,
  onSubmit: PropTypes.func,
  submitContent: PropTypes.string,
};

export default Form;
