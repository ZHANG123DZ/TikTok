import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faXmark } from '@fortawesome/free-solid-svg-icons';

function Register({ switchToLogin, onClose }) {
  const title = document.querySelector('title');
  title.textContent = 'Đăng ký | TikTok';

  return (
    <div className="DivContentContainer">
      <div className="DivModalContent">
        <div className="DivPageWrapper">
          <a href="" />
          <div className="DivLoginContainer">
            {/*  */}
            <div className="DivHomeContainer">
              <h2 className="H2Title">Đăng ký vào TikTok</h2>
              <div className="LoginOptionContainer">
                <div>
                  <div>
                    <div className="LasTLoginMethodContainer"></div>
                    <div className="DivBoxContainer">
                      <div className="DivIconContainer">
                        <FontAwesomeIcon icon={faUser} />
                      </div>
                      <div className="DivTextContainer">
                        <div style={{ fontSize: '11px' }}>
                          Sử dụng số điện thoại hoặc email
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
        {/*  */}
        <div className="DivAgreement">
          <p className="PText">
            Bằng việc tiếp tục với tài khoản có vị trí tại
            <Link className="ALink">Việt Nam</Link>
            <a href="#" target="_blank" className="ALink">
              Điều khoản dịch vụ
            </a>
            , đồng thời xác nhận rằng bạn đã đọc
            <a href="#" target="_blank" className="ALink">
              Chính sách quyền riêng tư
            </a>
            của chúng tôi.
          </p>
        </div>
        {/*  */}
        <div className="DivContainer">
          <div>Bạn đã có tài khoản?</div>
          <Link className="ALink" onClick={switchToLogin}>
            <span className="spanLinkText">Đăng nhập</span>
          </Link>
        </div>
      </div>
      <button className="DivCloseWrapper" onClick={onClose}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
}

Register.propTypes = {
  switchToLogin: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Register;
