import { NavLink } from 'react-router-dom'
import './HamburgerMenu.css'

function HamburgerMenu() {
    return (
        <div className="hamburger-menu-div">
            <img src="/src/assets/menu.png" alt="hamburger-menu" className="hamburger-icon" />
            <div className="hamburger-links">
                <NavLink to=""> Start </NavLink>
                <NavLink to="products"> Produkter </NavLink>
                <NavLink to="cart"> Kundvagn </NavLink>
                <NavLink to="admin"> Personalinloggning </NavLink>
            </div>
        </div>
    )
}

export default HamburgerMenu