import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useViewContext } from './ViewContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import LoginOptionContainer from './LoginOptionContainer';
import { useState } from 'react';

function Login({ switchToRegister, onClose }) {
  const { currentView } = useViewContext();

  useEffect(() => {
    document.title = 'Đăng nhập | TikTok';
  }, []);

  return (
    <div className="DivContentContainer">
      <div className="DivModalContent">
        <div className="DivPageWrapper">
          <a href="" />
          <div className="DivLoginContainer">
            {/*  */}
            {/* <div className="DivHomeContainer">
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
                  <div>
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
            </div> */}
            {/*  */}
            <div className="DivHomeContainer">
              <LoginOptionContainer />
            </div>
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
          <div>Bạn không có tài khoản?</div>
          <Link className="ALink" onClick={switchToRegister}>
            <span className="spanLinkText">Đăng ký</span>
          </Link>
        </div>
      </div>
      <button className="DivCloseWrapper" onClick={onClose}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
}

Login.propTypes = {
  switchToRegister: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Login;
