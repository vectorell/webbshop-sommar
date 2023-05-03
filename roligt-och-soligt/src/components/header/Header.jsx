import HamburgerMenu from '../hamburgermenu/HamburgerMenu'
import './Header.css'
import { useRecoilState } from 'recoil'
import { hamburgerMenuState } from '../../recoil/atom/showHamburger/showHamburger'
import styled from 'styled-components'

function Header() {
    const [showHamburgerMenu, setShowHamburgerMenu] = useRecoilState(hamburgerMenuState)

    const HamburgerIcon = styled.img`
        width: 3em;
        margin: 1em;

        &:hover {
            cursor: pointer;
        }
    `

    return (
        <div className='header-div'>
            <HamburgerIcon src="/src/assets/menu.png" alt="hamburger-menu" className="hamburger-icon" onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}/>
        </div>
    )
}

export default Header