import { faCompass, faEllipsis, faHome, faMessage, faPaperPlane, faSquarePlus, faTelevision, faUser, faUserGroup, faUserMinus } from "@fortawesome/free-solid-svg-icons";
import config from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navigation = {
    home: {
        label: "For You",
        link: config.routes.home,
        icon: <FontAwesomeIcon icon={faHome}/>
    },
    explore: {
        label: "Explore",
        link: config.routes.home,
        icon: <FontAwesomeIcon icon={faCompass}/>
    },
    following: {
        label: "Following",
        link: config.routes.home,
        icon: <FontAwesomeIcon icon={faUserMinus}/>
    },
    friends: {
        label: "Friends",
        link: config.routes.home,
        icon: <FontAwesomeIcon icon={faUserGroup}/>,
        protected: true,
    },
    upload: {
        label: "Upload",
        link: config.routes.home,
        icon: <FontAwesomeIcon icon={faSquarePlus}/>,
        protected: true,
    },
    active: {
        label: "Active",
        link: config.routes.home,
        icon: <FontAwesomeIcon icon={faMessage}/>,
        protected: true,
    },
    message: {
        label: "Message",
        link: config.routes.home,
        icon: <FontAwesomeIcon icon={faPaperPlane}/>,
        protected: true,
    },
    live: {
        label: "LIVE",
        link: config.routes.home,
        icon: <FontAwesomeIcon icon={faTelevision}/>
    },
    profile: {
        label: "Profile",
        link: config.routes.home,
        icon: <FontAwesomeIcon icon={faUser}/>,
        protected: true,
    },
    more: {
        label: "More",
        link: config.routes.home,
        icon: <FontAwesomeIcon icon={faEllipsis}/>
    },
}

export default navigation