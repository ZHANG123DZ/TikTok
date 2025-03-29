import { Route, Routes } from "react-router-dom"
import DefaultLayout from "../../layout/DefaultLayout/DefaultLayout"
import routes from "../../routes"
import ProtectedRoute from "../ProtectedRoute"
import { Fragment } from "react"

function AppRoutes() {
    return (
        <Routes>
        <Route element={<DefaultLayout />}>
        {routes.map(route => {
          const Component = route.component
          const RouteElement = route.protected?ProtectedRoute:Fragment
          return (
            <Route 
              key={route.path}
              path={route.path}
              element={
                <RouteElement>
                  <Component/>
                </RouteElement>
              }
            />
          )
        })}
        </Route>
      </Routes>
    )
}

export default AppRoutes