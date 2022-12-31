import React from 'react'
// Components::
import Home from './components/Home'
import Luxury from './components/Luxury'
import Spring from './components/Spring'
import Health from './components/Health'
import LifeStyle from './components/LifeStyle'
import Interior from './components/Interior'
import GoToTop from './components/GotoTop'
import Vehicles from './components/Vehicles'
// React Router
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { useState } from 'react'
// Images
import Col_1 from './Images/1-col.png'
import Col_2 from './Images/2-col.png'
import Col_3 from './Images/3-col.png'
import Col_4 from './Images/4-col.png'
//
const App = () => {
  const location = useLocation()
  // console.log('location::', location)
  const [cols, setCols] = useState(3)
  // console.log('Grid Columns::', cols)
  return (
    <>
      <div className="bg-slate-200">
        <ul className="flex bg-[#b6c0cf] justify-between" id="home">
          <span className="flex gap-4 text-2xl font-extrabold p-4">
            <li>
              <NavLink
                to={'/'}
                className={`${
                  location.pathname === '/' ? 'text-indigo-500' : ''
                }`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <Link
                to="/luxury"
                className={`${
                  location.pathname === '/luxury' ? 'text-indigo-500' : ''
                }`}
              >
                Luxury
              </Link>
            </li>
            <li>
              <Link
                to="/spring"
                className={`${
                  location.pathname === '/spring' ? 'text-indigo-500' : ''
                }`}
              >
                Spring
              </Link>
            </li>
            <li>
              <Link
                to="/health"
                className={`${
                  location.pathname === '/health' ? 'text-indigo-500' : ''
                }`}
              >
                Health
              </Link>
            </li>
            <li>
              <Link
                to="/lifestyle"
                className={`${
                  location.pathname === '/lifestyle' ? 'text-indigo-500' : ''
                }`}
              >
                LifeStyle
              </Link>
            </li>
            <li>
              <Link
                to="/interior"
                className={`${
                  location.pathname === '/interior' ? 'text-indigo-500' : ''
                }`}
              >
                Interior
              </Link>
            </li>
            <li>
              <Link
                to="/vehicles"
                className={`${
                  location.pathname === '/vehicles' ? 'text-indigo-500' : ''
                }`}
              >
                Vehicles
              </Link>
            </li>
          </span>
          <span className="flex gap-2  items-center px-4">
            <button className="" onClick={() => setCols(1)}>
              <img className="shadow-md shadow-gray-700" src={Col_1} alt="" />
            </button>
            <button className="" onClick={() => setCols(2)}>
              <img className="shadow-md shadow-gray-700" src={Col_2} alt="" />
            </button>
            <button className="" onClick={() => setCols(3)}>
              <img className="shadow-md shadow-gray-700" src={Col_3} alt="" />
            </button>
            <button className="" onClick={() => setCols(4)}>
              <img className="shadow-md shadow-gray-700" src={Col_4} alt="" />
            </button>
          </span>
        </ul>
        {/* For Gradient */}
        <div className="bg-gradient-to-b h-8 from-[#b6c0cf] to-slate-200"></div>
        {/* For Gradient */}
        <Routes>
          <Route path="/" element={<Home column={cols} />}></Route>
          <Route path="/luxury" element={<Luxury column={cols} />}></Route>
          <Route path="/spring" element={<Spring column={cols} />}></Route>
          <Route path="/health" element={<Health column={cols} />}></Route>
          <Route
            path="/lifestyle"
            element={<LifeStyle column={cols} />}
          ></Route>
          <Route path="/interior" element={<Interior column={cols} />}></Route>
          <Route path="/vehicles" element={<Vehicles column={cols} />}></Route>
        </Routes>
        <div className="flex justify-center py-4 ">
          <GoToTop />
        </div>
      </div>
    </>
  )
}
export default App
