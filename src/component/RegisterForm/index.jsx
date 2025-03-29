import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function RegisterForm() {
  return (
    <form>
      <h2 className="H2Title">Đăng ký</h2>
      <div className="DivTitle">Vui lòng cho biết ngày sinh của bạn</div>
      <div className="DivAgeSelector">
        <div className="DivSelector">
          <div className="DivSelectorLabel">
            Tháng
            <FontAwesomeIcon icon={faSortDown} />
          </div>
          <div className="DivOptionWrapper">
            {/* Dữ liệu trong các thẻ className= DivOption */}
          </div>
        </div>
      </div>
      <div className="DivDescription">
        Ngày sinh của bạn sẽ không được hiển thị công khai
      </div>
      <div className="DivDescription">
        Điện thoại
        <a href="" className="Alink">
          Đăng ký bằng email
        </a>
      </div>
      <div className="DivContainer">
        <div className="DivPhoneInputContainer">
          <div className="DivAreaSelectionContainer">
            <div className="DivAreaLabelContainer">
              <span className="SpanLabelContainer">VN +84</span>
              <FontAwesomeIcon></FontAwesomeIcon>
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
      <button className="Button-StyleButton">Tiếp</button>
    </form>
  );
}

export default RegisterForm;
