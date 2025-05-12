import { Link } from 'react-router-dom';
import { emailLogin } from '../../../features/login/loginSlice';
import { useDispatch } from 'react-redux';

import styles from './styles.module.scss';
import { useState } from 'react';
import PasswordInput from '../../../component/PasswordInput';
import PhoneInput from '../../../component/PhoneInput';
import CodeInput from '../../../component/CodeInput';
import { useMemo } from 'react';
import {
  loginPhoneCodeSchema,
  loginPhonePasswordSchema,
} from '../../../schema/loginSchema';
import Form from '../../../component/Form';

function LoginPhoneForm() {
  const dispatch = useDispatch();
  const [IsCode, setIsCode] = useState(true);
  let schema = useMemo(
    () => (IsCode ? loginPhoneCodeSchema : loginPhonePasswordSchema),
    [IsCode]
  );

  const onSubmit = async (data) => {
    try {
      console.log('submit data:', data);
    } catch (err) {
      console.error('Submit failed:', err);
    }
  };

  return (
    <>
      <h2 className="H2Title">Đăng nhập</h2>
      <div className={styles.DivDescription}>
        Điện thoại
        <Link onClick={() => dispatch(emailLogin())} className="ALink">
          Đăng nhập bằng email hoặc tên người dùng
        </Link>
      </div>
      <Form schema={schema} onSubmit={onSubmit} submitContent={'Đăng nhập'}>
        <div className="DivContainer">
          <PhoneInput />
        </div>
        {IsCode ? <CodeInput /> : <PasswordInput />}
        <div className={styles.DivLinkContainer}>
          {!IsCode ? (
            <>
              <Link className="ALink">Bạn quên mật khẩu?</Link>
              <hr />
            </>
          ) : null}
          <Link className="ALink" onClick={() => setIsCode(!IsCode)}>
            {IsCode ? 'Đăng nhập bằng mật khẩu' : 'Đăng nhập bằng mã'}
          </Link>
        </div>
      </Form>
    </>
  );
}

export default LoginPhoneForm;
