import '../App.css'
import Header from "../components/header/Header"
import { Outlet } from 'react-router-dom'
import HamburgerMenu from '../components/hamburgermenu/HamburgerMenu'

function Root() {
    return (
        <>
            <header>
                <Header/>
            </header>

            <main>
                <HamburgerMenu />
                <Outlet />
            </main>


        
        
        </>
    )
}

export default Root