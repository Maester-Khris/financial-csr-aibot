import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

import './App.css'
import appLogo from './assets/finbotv2.png'
import Home from './Menucomponents/Home'
import Contact from './Menucomponents/Contact'
import Map from './Menucomponents/Map'

function App() {
  return (
    <BrowserRouter>
      <main className='mb-2'>
        <header className='main-content'>
          <div className='header-content'>
            <div className='header-content-left'>
              <img className='header-app-logo' src={appLogo} alt="fin logo" style={{height:'70px',width:'70px',}} />
              <div className='header-app'>
                <h3 className='header-appname'>FinBot</h3>
                <p>Your AI-Powered Customer Ally in Finance</p>
              </div>
            </div>
            <div className='header-content-right'>
              <div className='header-menu'>
                <li><NavLink to="/" className={({ isActive }) => isActive ? "active-link": ""}>Home</NavLink></li>
                <li><NavLink to="/contact" className={({isActive}) => isActive ? "active-link": ""}>Contact us</NavLink></li>
                {/* <li><NavLink to="/test" className={({isActive}) => isActive ? "active-link": ""}>Map</NavLink></li> */}
              </div>
            </div>
          </div>
        </header>
        <section className='main-content section-hero-home' style={{backgroundColor:"transparent"}}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/test" element={<Map />}></Route>
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  )
}

export default App;