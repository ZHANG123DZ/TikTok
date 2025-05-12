import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import RegisterOptionContainer from './RegisterOptionContainer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { optionRegister } from '../../features/register/registerSlice';
import RegisterPhoneForm from './RegisterPhoneForm';
import RegisterEmailForm from './RegisterEmailForm';

import styles from './register.module.scss';
import {
  closeModal,
  loginModal,
} from '../../features/modalContent/modalContentSlice';
import RegisterFinal from './RegisterFinal';
function Register() {
  const component = useSelector((state) => state.register.component);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Đăng ký | TikTok';
    dispatch(optionRegister());
  }, [dispatch]);

  const renderRegister = () => {
    switch (component) {
      case 'optionRegister':
        return <RegisterOptionContainer />;
      case 'emailRegister':
        return <RegisterEmailForm />;
      case 'phoneRegister':
        return <RegisterPhoneForm />;
      case 'finalRegister':
        return <RegisterFinal />;
      default:
        return null;
    }
  };

  return (
    <div className="DivCenterWrapper">
      <div className="DivContentContainer">
        <div className="DivModalContent">
          <div className="DivPageWrapper">
            <a href="" />
            <div className="DivLoginContainer">
              <div className="DivHomeContainer">{renderRegister()}</div>
            </div>
          </div>
          {component === 'option' ? (
            <div className="DivAgreement">
              <p className={styles.PText}>
                Bằng việc tiếp tục với tài khoản có vị trí tại
                <Link className={styles.ALink}>Việt Nam</Link>
                <a href="#" target="_blank" className={styles.ALink}>
                  Điều khoản dịch vụ
                </a>
                , đồng thời xác nhận rằng bạn đã đọc
                <a href="#" target="_blank" className={styles.ALink}>
                  Chính sách quyền riêng tư
                </a>
                của chúng tôi.
              </p>
            </div>
          ) : null}
          <div className={styles.DivContainer}>
            <div>Bạn có tài khoản?</div>
            <Link
              className={styles.ALink}
              onClick={() => dispatch(loginModal())}
            >
              <span className={styles.spanLinkText}>Đăng nhập</span>
            </Link>
          </div>
        </div>
        <button
          className="DivCloseWrapper"
          onClick={() => dispatch(closeModal())}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
}

Register.propTypes = {
  switchToLogin: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Register;
