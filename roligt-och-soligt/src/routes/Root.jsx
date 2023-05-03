import '../App.css'
import Header from "../components/header/Header"
import { Outlet } from 'react-router-dom'
import HamburgerMenu from '../components/hamburgermenu/HamburgerMenu'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { hamburgerMenuState } from '../recoil/atom/showHamburger/showHamburger'


function Root() {
    const [showHamburgerMenu, setShowHamburgerMenu] = useRecoilState(hamburgerMenuState)


    return (
        <>
            <header>
                <Header />
            </header>

            <main>
                {showHamburgerMenu && <HamburgerMenu />}
                <Outlet />
            </main>
        </>
    )
}

export default Root