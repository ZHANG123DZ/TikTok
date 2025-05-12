import * as yup from 'yup';

export const registerPhoneSchema = yup
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

export const registerEmailSchema = yup
  .object({
    email: yup
      .string()
      .email('Nhập địa chỉ email hợp lệ')
      .required('Không được để trống mã kiểm tra'),
    password: yup
      .string()
      .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
      .required('Thiếu thông tin chứng nhận ID'),
    code: yup
      .string()
      .matches(/^\d+$/, 'Phải nhập mã có 6 chữ số')
      .length(6, 'Phải nhập mã có 6 chữ số')
      .required('Không được để trống mã kiểm tra'),
  })
  .required();
export const TikTokID = yup.object({
  ID: yup.string(),
});
export default { registerPhoneSchema, registerEmailSchema, TikTokID };

//Hãy đảm bảo bạn nhập ngày sinh thật của mình

//Nhập một ngày hợp lệ

//
