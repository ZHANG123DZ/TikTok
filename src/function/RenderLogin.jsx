import { useSelector } from 'react-redux';
import LoginOptionContainer from '../page/Login/LoginOptionContainer';
import LoginEmailForm from '../page/Login/LoginEmailForm';
import LoginPhoneForm from '../page/Login/LoginPhoneForm';

function RenderLogin() {
  const component = useSelector((state) => state.login.component);

  switch (component) {
    case 'optionLogin':
      return <LoginOptionContainer />;
    case 'emailLogin':
      return <LoginEmailForm />;
    case 'phoneLogin':
      return <LoginPhoneForm />;
    default:
      return null;
  }
}

export default RenderLogin;
