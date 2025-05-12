import { useSelector } from 'react-redux';
import Login from '../page/Login';
import Register from '../page/Register';
import EditProfile from '../component/EditProfile';

function RenderModalView() {
  const component = useSelector((state) => state.modal.component);
  switch (component) {
    case 'login':
      return <Login />;
    case 'register':
      return <Register />;
    case 'editProfile': 
      return <EditProfile />;
    default:
      return null;
  }
}

export default RenderModalView;
