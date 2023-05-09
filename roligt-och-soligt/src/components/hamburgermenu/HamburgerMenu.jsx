import { NavLink } from 'react-router-dom'
import './HamburgerMenu.css'
import { useRecoilState } from 'recoil'
import { hamburgerMenuState } from '../../recoil/atom/showHamburger/showHamburger'

export default function HamburgerMenu() {
    const [showMenu, setShowMenu] = useRecoilState(hamburgerMenuState)

    function closeHamburgerMenu() {
        setShowMenu(!hamburgerMenuState)
    }

    return (
        <div className="hamburger-menu-div">
            <div className="hamburger-links">
                <NavLink to="" onClick={closeHamburgerMenu}> Start </NavLink>
                <NavLink to="products" onClick={closeHamburgerMenu}> Produkter </NavLink>
                <NavLink to="cart" onClick={closeHamburgerMenu}> Kundvagn </NavLink>
                <NavLink to="admin" onClick={closeHamburgerMenu}> Personalinloggning </NavLink>
            </div>
        </div>
    )
}