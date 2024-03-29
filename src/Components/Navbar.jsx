import { Link } from "react-router-dom"
import React from 'react'
import './Navbar.css'

import { useGlobalStates } from "./utils/global.context";

const Navbar = () => {
  const { state, dispatch } = useGlobalStates()

  const changeTheme = () => {
    dispatch({ type: "CHANGE_THEME" })
  }

  return (
    <header>
      <div className="headerWrapper">
        <img src={ `/images/${state.theme === 'dark' ? 'DH-dark' : 'DH'}.png` } alt="" />
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/favs">Favs</Link>
          </ul>
          <button
            className={`themeButton ${state.theme}`}
            onClick={changeTheme}
          >
            { state.theme !== 'dark' ? '🌙' : '🔆' }
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar