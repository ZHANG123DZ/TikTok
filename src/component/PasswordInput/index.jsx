import styles from './styles.module.scss';
import InputText from '../InputText';
import { useFormContext } from 'react-hook-form';

function PasswordInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const message = errors.password?.message;
  return (
    <div>
      <div
        className={styles.DivPasswordInputContainer}
        style={{ border: message && '1px solid rgb(255, 76, 58)' }}
      >
        <InputText
          name={'password'}
          register={register}
          message={message}
          isPassword
          placeholder={'Nhập mật khẩu'}
        />
      </div>
      {errors.password && (
        <div className={styles.DivTextContainer}>
          <span>{errors.password && message}</span>
        </div>
      )}
    </div>
  );
}

export default PasswordInput;
