
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { useGlobalStates } from "./utils/global.context";

export const Layout = () => {
  const { state, dispatch } = useGlobalStates()

  return (
    <div className={`theme-${state.theme}`}>
        <Navbar />
        <Outlet/>
        <Footer />
    </div>
  )
}
