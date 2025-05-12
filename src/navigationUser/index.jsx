import {
  faCompass,
  faEllipsis,
  faHome,
  faMessage,
  faPaperPlane,
  faSquarePlus,
  faTelevision,
  faUser,
  faUserGroup,
  faUserMinus,
} from '@fortawesome/free-solid-svg-icons';
import config from '../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navigationUser = {
  home: {
    label: 'Đề xuất',
    link: config.routes.home,
    icon: <FontAwesomeIcon icon={faHome} />,
  },
  explore: {
    label: 'Khám phá',
    link: config.routes.explore,
    icon: <FontAwesomeIcon icon={faCompass} />,
  },
  following: {
    label: 'Đang theo dõi',
    link: config.routes.following,
    icon: <FontAwesomeIcon icon={faUserMinus} />,
  },
  friends: {
    label: 'Bạn bè',
    link: config.routes.friends,
    icon: <FontAwesomeIcon icon={faUserGroup} />,
  },
  upload: {
    label: 'Đăng lên',
    link: config.routes.upload,
    icon: <FontAwesomeIcon icon={faSquarePlus} />,
  },
  active: {
    label: 'Hoạt động',
    link: config.routes.active,
    icon: <FontAwesomeIcon icon={faMessage} />,
  },
  message: {
    label: 'Tin nhắn',
    link: config.routes.message,
    icon: <FontAwesomeIcon icon={faPaperPlane} />,
  },
  live: {
    label: 'LIVE',
    link: config.routes.live,
    icon: <FontAwesomeIcon icon={faTelevision} />,
  },
  profile: {
    label: 'Hồ sơ',
    link: config.routes.profile,
    icon: <FontAwesomeIcon icon={faUser} />,
  },
  more: {
    label: 'Thêm',
    link: config.routes.more,
    icon: <FontAwesomeIcon icon={faEllipsis} />,
  },
};

export default navigationUser;
