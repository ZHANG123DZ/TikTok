import { useDispatch } from 'react-redux';
import {
  finalRegister,
  phoneRegister,
} from '../../../features/register/registerSlice';
import { Link } from 'react-router-dom';
import PasswordInput from '../../../component/PasswordInput';
import CodeInput from '../../../component/CodeInput';

import styles from './styles.module.scss';
import AgeSelector from '../../../component/AgeSelector';
import CheckBox from '../../../component/CheckBox';
import { registerEmailSchema } from '../../../schema/registerSchema';
import Form from '../../../component/Form';
import { useMemo } from 'react';

import Input from '../../../component/Input';
function RegisterEmailForm() {
  const dispatch = useDispatch();
  let schema = useMemo(() => registerEmailSchema, []);

  const onSubmit = async (data) => {
    try {
      const payload = {
        firstName: 'newUser',
        lastName: 'newUser',
        password: data.password,
        password_confirmation: data.password,
        email: data.email,
      };
      dispatch(finalRegister(payload));
    } catch (err) {
      console.error('Submit failed:', err);
    }
  };

  return (
    <>
      <h2 className="H2Title">Đăng ký</h2>
      <Form schema={schema} onSubmit={onSubmit} submitContent={'Tiếp'}>
        <div className={styles.DivTitle}>
          Vui lòng cho biết ngày sinh của bạn
        </div>
        <AgeSelector />
        <div className={styles.DivDescription}>
          Ngày sinh của bạn sẽ không được hiển thị công khai.
        </div>
        <div className={styles.DivDescription}>
          Email
          <Link className="ALink" onClick={() => dispatch(phoneRegister())}>
            Đăng ký bằng số điện thoại
          </Link>
        </div>
        <Input content={'Địa chỉ email'} name={'email'} />
        <PasswordInput />
        <CodeInput />
        <CheckBox
          label={
            'Nhận nội dung thịnh hành, bản tin, khuyến mại, đề xuất và thông tin cập nhật tài khoản được gửi đến email của bạn'
          }
        />
      </Form>
    </>
  );
}

export default RegisterEmailForm;
