import { NavLink } from 'react-router-dom'
import './HamburgerMenu.css'
import { useRecoilState } from 'recoil'
import { hamburgerMenuState } from '../../recoil/atom/showHamburger/showHamburger'
import { loginState } from '../../recoil/atom/loginState/loginState'
import { whoAmI } from '../../recoil/atom/whoAmI/whoAmI'

export default function HamburgerMenu() {
    const [showMenu, setShowMenu] = useRecoilState(hamburgerMenuState)
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState)
    const [whoIam, setWhoIAm] = useRecoilState(whoAmI)


    function closeHamburgerMenu() {
        setShowMenu(!hamburgerMenuState)
    }

    return (
        <div className="hamburger-menu-div">
            <div className="hamburger-links">
                <NavLink to="start" onClick={closeHamburgerMenu}> Start </NavLink>
                <NavLink to="products" onClick={closeHamburgerMenu}> Produkter </NavLink>
                <NavLink to="cart" onClick={closeHamburgerMenu}> Kundvagn </NavLink>
                <NavLink to="admin" onClick={closeHamburgerMenu}> Personalinloggning </NavLink>
            </div>
                <NavLink to="creds" onClick={closeHamburgerMenu}> Credits </NavLink>
                {!isLoggedIn && <button onClick={() => {
                    setIsLoggedIn(!isLoggedIn)
                    setWhoIAm(sudo)
                    }}>
                {isLoggedIn ? "Logga ut" : "Logga in"}{" "}
            </button>}
        </div>
    )
}