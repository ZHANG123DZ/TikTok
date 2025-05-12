import styles from './styles.module.scss';
import InputText from '../InputText';
import { useFormContext } from 'react-hook-form';

function CodeInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const message = errors.code?.message;
  return (
    <div>
      <div className={styles.DivCodeInputContainer}>
        <div
          style={{
            display: 'flex',
            width: '100%',
            border: message && '1px solid rgb(255, 76, 58)',
          }}
        >
          <InputText
            name={'code'}
            register={register}
            placeholder="Nhập mã gồm 6 chữ số"
            message={message}
          />
        </div>

        <button className="ButtonSendCode">Gửi mã</button>
      </div>
      {errors.code && (
        <div className={styles.DivTextContainer}>
          <span>{errors.code && message}</span>
        </div>
      )}
    </div>
  );
}

export default CodeInput;
