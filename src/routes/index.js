import config from "../config";
import Home from "../page/Home/index.jsx";
import Discover from "../page/Discover/index.jsx";
import NotFound from "../page/NotFound/index.jsx";

const routes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.discover,
        component: Discover,
    },
    {
        path: config.routes.notFound,
        component: NotFound,
    }
]

export default routes