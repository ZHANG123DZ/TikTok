import { config } from "@fortawesome/fontawesome-svg-core"
import PropTypes from "prop-types"
import {useEffect, useState } from "react"
import { Navigate, useLocation } from "react-router-dom"

function ProtectedRoute({children}) {
    const location = useLocation()

    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        fetch("https://api01.f8team.dev/api/auth/me", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        .then((res) => {
            if (!res.ok) throw res;
            return res.json();
        })
        .then((data) => {
            setCurrentUser(data.user);
        })
        .catch(() => {})
        .finally(() => {
        });
    },[])
    if (!currentUser) {
        const path = encodeURIComponent(location.pathname);
        return <Navigate to={`${config.routes.login}?continue=${path}`} />;
    }
    return (
        children
    )
}


ProtectedRoute.propTypes = {
    children: PropTypes.element.isRequired,
} 
export default ProtectedRoute