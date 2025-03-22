import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import DefaultLayout from './layout/defaultLayout'
import routes from './routes'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
        {routes.map(route => {
          const Component = route.component
          return (
            <Route 
              key={route.path}
              path={route.path}
              element={<Component/>}
            />
          )
        })}
        </Route>
      </Routes>
    </Router>
  )
    
  
}

export default App
