import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  emailRegister,
  finalRegister,
} from '../../../features/register/registerSlice';
import styles from './styles.module.scss';
import PhoneInput from '../../../component/PhoneInput';
import CodeInput from '../../../component/CodeInput';
import AgeSelector from '../../../component/AgeSelector';

import { useMemo } from 'react';

import Form from '../../../component/Form';
import { registerPhoneSchema } from '../../../schema/registerSchema';

function RegisterPhoneForm() {
  const dispatch = useDispatch();
  let schema = useMemo(() => registerPhoneSchema, []);
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
    } catch (error) {
      console.log(error);
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
          Điện thoại
          <Link className="ALink" onClick={() => dispatch(emailRegister())}>
            Đăng ký bằng email
          </Link>
        </div>

        <div className="">
          <PhoneInput />
        </div>
        <CodeInput />
      </Form>
    </>
  );
}

export default RegisterPhoneForm;
