import config from "../config";
import Home from "../page/Home";
import Discover from "../page/Discover";
import NotFound from "../page/NotFound";

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