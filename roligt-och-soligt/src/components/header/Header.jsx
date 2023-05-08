import './Header.css'
import { useRecoilState } from 'recoil'
import { loginState } from '../../recoil/atom/loginState/loginState'
import { hamburgerMenuState } from '../../recoil/atom/showHamburger/showHamburger'
import styled from 'styled-components'
import hamburgerIcon from "/src/assets/menu.png"
import cartIcon from "/src/assets/shopping-cart.png"
import { NavLink } from 'react-router-dom'
import { whoAmI } from '../../recoil/atom/whoAmI/whoAmI'

function Header() {
    const [showHamburgerMenu, setShowHamburgerMenu] = useRecoilState(hamburgerMenuState)
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState)
    const [whoIAm, setWhoIAm] = useRecoilState(whoAmI)

    const HamburgerIcon = styled.img`
        width: 3em;
        margin: 1em;

        &:hover {
            cursor: pointer;
        }
    `
        const CartIcon = styled.img`
        width: 3em;
        margin: 1em;
        justify-self: end;

        &:hover {
            cursor: pointer;
        }
    `

    return (
        <div className='header-div'>
            <HamburgerIcon src={hamburgerIcon} alt="hamburger-menu" className="hamburger-icon" onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}/>
            {isLoggedIn && <h3> inloggad som: {whoIAm.username}  </h3>}
            <NavLink to="/cart">
            <CartIcon src={cartIcon}/>
            </NavLink> 
        </div>
    )
}

export default Header