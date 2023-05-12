import './Header.css'
import { useRecoilState } from 'recoil'
import { loginState } from '../../recoil/atom/loginState/loginState'
import { hamburgerMenuState } from '../../recoil/atom/showHamburger/showHamburger'
import styled from 'styled-components'
import hamburgerIcon from "/src/assets/menu.png"
import cartIcon from "/src/assets/shopping-cart.png"
import { NavLink } from 'react-router-dom'
import { whoAmI } from '../../recoil/atom/whoAmI/whoAmI'
import loadingSpinner from '../../recoil/atom/loadingSpinner/loadingSpinner'
import loadingSpinnerGif from "../../assets/loading-spinner.gif"
import { useRef } from 'react'
import { cartState } from '../../recoil/atom/cartState/cartState'

function Header() {
    const [showHamburgerMenu, setShowHamburgerMenu] = useRecoilState(hamburgerMenuState)
    const [isLoading, setIsLoading] = useRecoilState(loadingSpinner)
    const [cartList, setCartList] = useRecoilState(cartState)
    const loaderRef = useRef(null)

    const HamburgerIcon = styled.img`
        width: 3em;
        margin: 1em;

        &:hover {
            cursor: pointer;
        }
    `
        const CartIcon = styled.img`
        width: 3em;
        /* margin: 1em; */
        justify-self: end;

        &:hover {
            cursor: pointer;
        }
    `

    return (
        <div className='header-div'>
            <HamburgerIcon src={hamburgerIcon} alt="hamburger-menu" className="hamburger-icon" onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}/>
            {isLoading ?
                <img className="spinner" ref={loaderRef} src={loadingSpinnerGif} style={{ display: 'block' }} />
                : <h1 className='header-title'> Roligt & Soligt </h1>
            }
            <div className='div-cart-icon'>
            <h3> { cartList.length } </h3>
                <NavLink to="/cart">
                    <CartIcon src={cartIcon}/>
                </NavLink> 
            </div>
        </div>
    )
}

export default Header