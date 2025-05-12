import config from '../config';
import Home from '../page/Home/index.jsx';
import Discover from '../page/Discover/index.jsx';
import NotFound from '../page/NotFound/index.jsx';
import Profile from '../page/Profile/index.jsx';
import Login from '../page/Login';
import Register from '../page/Register';
import Upload from '../page/Upload';

const routes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.explore,
    component: Discover,
  },
  {
    path: config.routes.following,
    component: Discover,
  },
  {
    path: config.routes.friends,
    component: Profile,
    protected: true,
    requireAuth: true,
  },
  {
    path: config.routes.upload,
    component: Upload,
    protected: true,
  },
  {
    path: config.routes.message,
    component: Profile,
    protected: true,
  },
  {
    path: config.routes.active,
    component: Profile,
    protected: true,
  },
  {
    path: config.routes.live,
    component: Profile,
    protected: true,
  },
  {
    path: config.routes.profile,
    component: Profile,
    protected: true,
  },
  {
    path: config.routes.login,
    component: Login,
  },
  {
    path: config.routes.register,
    component: Register,
  },
  {
    path: config.routes.notFound,
    component: NotFound,
  },
];

export default routes;
