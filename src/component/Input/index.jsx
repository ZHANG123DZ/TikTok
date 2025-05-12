import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import styles from './styles.module.scss';
import InputText from '../InputText';
function Input({ content, name }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const message = errors.email?.message;

  return (
    <div className={styles.DivContainer}>
      <div
        className={styles.DivEmailInputContainer}
        style={{ border: message && '1px solid rgb(255, 76, 58)' }}
      >
        <InputText
          name={name}
          placeholder={content}
          register={register}
          message={message}
        />
      </div>
      {errors.email && (
        <div className={styles.DivTextContainer}>
          <span>{errors.email && message}</span>
        </div>
      )}
    </div>
  );
}

Input.propTypes = {
  content: PropTypes.string,
  name: PropTypes.string,
};

export default Input;
