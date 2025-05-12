import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './login.module.scss';
import {
  closeModal,
  registerModal,
} from '../../features/modalContent/modalContentSlice';
import { optionLogin } from '../../features/login/loginSlice';
import RenderLogin from '../../function/RenderLogin';

function Login() {
  const component = useSelector((state) => state.login.component);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Đăng nhập | TikTok';
    dispatch(optionLogin());
  }, [dispatch]);

  return (
    <div className="DivCenterWrapper">
      <div className="DivContentContainer">
        <div className="DivModalContent">
          <div className="DivPageWrapper">
            <a href="" />
            <div className="DivLoginContainer">
              <div className="DivHomeContainer">
                <RenderLogin />
              </div>
            </div>
          </div>
          {/*  */}
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
          {/*  */}
          <div className={styles.DivContainer}>
            <div>Bạn không có tài khoản?</div>
            <Link
              className={styles.ALink}
              onClick={() => dispatch(registerModal())}
            >
              <span className={styles.spanLinkText}>Đăng ký</span>
            </Link>
          </div>
        </div>
        <button
          className="DivCloseWrapper"
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
}

export default Login;
