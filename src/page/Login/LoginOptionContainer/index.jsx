import { faQrcode, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function LoginOptionContainer({ Component }) {
  return (
    <>
      <h2 className="H2Title">Đăng nhập vào TikTok</h2>
      <div className="LoginOptionContainer">
        <div>
          <div>
            <div className="LasTLoginMethodContainer"></div>
            <div className="DivBoxContainer">
              <div className="DivIconContainer">
                <FontAwesomeIcon icon={faQrcode} />
              </div>
              <div className="DivTextContainer">
                <div style={{ fontSize: '11px' }}>Sử dụng mã QR</div>
              </div>
            </div>
          </div>
          <div onClick={Component()}>
            <div className="LasTLoginMethodContainer"></div>
            <div className="DivBoxContainer">
              <div className="DivIconContainer">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="DivTextContainer">
                <div style={{ fontSize: '11px' }}>
                  Sử dụng số điện thoại/email/tên người dùng
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

LoginOptionContainer.propTypes = {
  Component: PropTypes.element,
};

export default LoginOptionContainer;
