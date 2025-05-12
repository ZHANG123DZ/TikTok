import styles from './styles.module.scss';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputText from '../InputText';
import { useFormContext } from 'react-hook-form';

function PhoneInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const message = errors.phone?.message;

  return (
    <div>
      <div
        className={styles.DivPhoneInputContainer}
        style={{ border: message && '1px solid rgb(255, 76, 58)' }}
      >
        <div className={styles.DivAreaSelectionContainer}>
          <div className={styles.DivAreaLabelContainer}>
            <span className={styles.SpanLabelContainer}>VN +84</span>
            <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
          </div>
        </div>

        <InputText
          name={'phone'}
          register={register}
          message={message}
          placeholder={'Số điện thoại'}
        />
      </div>
      {errors.phone && (
        <div className={styles.DivTextContainer}>
          <span>{errors.phone && message}</span>
        </div>
      )}
    </div>
  );
}

export default PhoneInput;
