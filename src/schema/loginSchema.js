import * as yup from 'yup';

export const loginPhoneCodeSchema = yup
  .object({
    phone: yup
      .string()
      .matches(/^\d+$/, 'Nhập số điện thoại hợp lệ')
      .required('Không được để trống mã kiểm tra'),
    code: yup
      .string()
      .matches(/^\d+$/, 'Phải nhập mã có 6 chữ số')
      .length(6, 'Phải nhập mã có 6 chữ số')
      .required('Không được để trống mã kiểm tra'),
  })
  .required();

export const loginPhonePasswordSchema = yup
  .object({
    phone: yup
      .string()
      .matches(/^\d+$/, 'Nhập số điện thoại hợp lệ')
      .required('Vui lòng nhập số điện thoại'),
    password: yup
      .string()
      .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
      .required('Vui lòng nhập mật khẩu'),
  })
  .required();

export const loginEmailPasswordSchema = yup
  .object({
    email: yup
      .string()
      .email('Nhập địa chỉ email hợp lệ')
      .required('Không được để trống mã kiểm tra'),
    password: yup
      .string()
      .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
      .required('Thiếu thông tin chứng nhận ID'),
  })
  .required();

export default { loginPhoneCodeSchema, loginPhonePasswordSchema };


//Xác minh không thành công. Vui lòng nhấp vào Gửi lại và thử lần nữa.
//Người dùng không tồn tại
