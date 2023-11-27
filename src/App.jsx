
import './app.scss'
import { Outlet, useLocation } from 'react-router-dom'

import Header from './components/Header'
import Header2 from './components/Header'

import { AnimatePresence } from 'framer-motion'

function App() {
 

  return (
    <>
      <Header2 />
        <Outlet />
    </>
  )
}

export default App
