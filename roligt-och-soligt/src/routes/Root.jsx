import '../App.css'
import Header from "../components/header/Header"
import { Outlet } from 'react-router-dom'
import HamburgerMenu from '../components/hamburgermenu/HamburgerMenu'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { hamburgerMenuState } from '../recoil/atom/showHamburger/showHamburger'
import styled from 'styled-components'


function Root() {
    const [showHamburgerMenu, setShowHamburgerMenu] = useRecoilState(hamburgerMenuState)

    const Space = styled.div`
        margin: 3em;
    `

    return (
        <div className='body'>
            <header>
                <Header />
            </header>
            <main>
            <Space/>
                {showHamburgerMenu && <HamburgerMenu />}
                <Outlet />
            </main>
        </div>
    )
}

export default Root