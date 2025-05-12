import { useDispatch, useSelector } from 'react-redux';
import Form from '../../../component/Form';
import Input from '../../../component/Input';
import { register } from '../../../services/authService';
import { TikTokID } from '../../../schema/registerSchema';
import { closeModal } from '../../../features/modalContent/modalContentSlice';

function RegisterFinal() {
  const payload = useSelector((state) => state.register.data);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const res = await register(payload);
      if (res.status === 'success') {
        localStorage.setItem('token', res.data.access_token);
        // dispatch(setUser({ data: res.data }));
        dispatch(closeModal());
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h2 className="H2Title">Đăng ký</h2>
      <Form schema={TikTokID} submitContent={'Đăng ký'} onSubmit={onSubmit}>
        <Input content={'TikTok ID'} name={'ID'} />
        <p>Bạn luôn có thể thay đổi điều này sau</p>
        <button type="submit">Bỏ qua</button>
      </Form>
    </>
  );
}

export default RegisterFinal;
