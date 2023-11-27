
import './app.scss'
import { Outlet, useLocation } from 'react-router-dom'

import Header from './components/Header'
import Header2 from './components/Header'

function App() {
 

  return (
    <>
      <Header2 />
        <Outlet />
    </>
  )
}

export default App
