import { useDispatch, useSelector } from 'react-redux';
import { phoneLogin } from '../../../features/login/loginSlice';
import { Link, useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';
import PasswordInput from '../../../component/PasswordInput';
import { loginEmailPasswordSchema } from '../../../schema/loginSchema';
import { useMemo } from 'react';
import Form from '../../../component/Form';
import Input from '../../../component/Input';
import { login } from '../../../services/authService';
import { closeModal } from '../../../features/modalContent/modalContentSlice';
import { getCurrentUser } from '../../../features/auth/authAsync';

function LoginEmailForm() {
  const navigate = useNavigate();
  const link = useSelector((state) => state.url.link);

  let schema = useMemo(() => loginEmailPasswordSchema, []);
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    try {
      const payload = {
        email: data.email,
        password: data.password,
      };
      const res = await login(payload);
      if (res.status === 'success') {
        dispatch(getCurrentUser());
        dispatch(closeModal());
        navigate(link, { replace: true });
      }
    } catch (err) {
      console.error('Submit failed:', err);
    }
  };

  return (
    <>
      <h2 className="H2Title">Đăng nhập</h2>
      <div className={styles.DivDescription}>
        Email hoặc TikTok ID
        <Link href="" className="ALink" onClick={() => dispatch(phoneLogin())}>
          Đăng nhập bằng số điện thoại
        </Link>
      </div>
      <Form schema={schema} onSubmit={onSubmit} submitContent={'Đăng nhập'}>
        <Input content={'Email hoặc TikTokID'} name={'email'} />
        <PasswordInput />
        <Link className="ALink">Bạn quên mật khẩu?</Link>
      </Form>
    </>
  );
}

export default LoginEmailForm;
