import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faEyeSlash,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function InputText({
  name,
  register = () => ({}),
  message = '',
  placeholder = '',
  isPassword = false,
}) {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className="DivInputContainer-StyledBaseInput">
      <input
        type={isPassword ? (isHidden ? 'password' : 'text') : 'text'}
        placeholder={placeholder}
        {...register(name)}
        className={message ? styles.InputErrorContainer : styles.InputContainer}
      />
      <div className={styles.DivIconContainer}>
        {message && (
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            style={{ color: 'rgb(255, 76, 58)' }}
          />
        )}
        {isPassword && (
          <FontAwesomeIcon
            icon={isHidden ? faEyeSlash : faEye}
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
            onClick={() => setIsHidden(!isHidden)}
          />
        )}
      </div>
    </div>
  );
}

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func,
  message: PropTypes.string,
  placeholder: PropTypes.string,
  isPassword: PropTypes.bool,
};

export default InputText;
