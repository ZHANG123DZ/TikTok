import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <form>
      <h2 className="H2Title">Đăng nhập</h2>
      <div className="DivDescription">
        Ngày sinh của bạn sẽ không được hiển thị công khai
      </div>
      <div className="DivDescription">
        Điện thoại
        <a href="" className="Alink">
          Đăng nhập bằng email hoặc tên người dùng
        </a>
      </div>
      <div className="DivContainer">
        <div className="DivPhoneInputContainer">
          <div className="DivAreaSelectionContainer">
            <div className="DivAreaLabelContainer">
              <span className="SpanLabelContainer">VN +84</span>
              <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
            </div>
          </div>
          <div className="DivInputContainer">
            <input
              type="text"
              placeholder="Số điện thoại"
              className="InputContainer"
            />
            <div className="DivIconContainer"></div>
          </div>
        </div>
      </div>
      <div>
        <div className="DivCodeInputContainer">
          <input type="text" placeholder="Nhập mã gồm 6 chữ số" />
          <div className="DivIconContainer"></div>
        </div>
        <button className="ButtonSendCode">Gửi mã</button>
      </div>
      <Link to="">Đăng nhập bằng mật khẩu</Link>
      <button className="Button-StyleButton">Đăng nhập</button>
    </form>
  );
}

export default LoginForm;
