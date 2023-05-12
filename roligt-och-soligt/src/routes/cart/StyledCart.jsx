import styled from "styled-components"
import { Link, NavLink } from "react-router-dom"
import pattern from '../../assets/pattern.jpg'

export const PageDiv = styled.div`
    /* border: 1px solid black; */
    width: 50%;
    min-width: 32em;
    height: fit-content;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1em;
    align-items: center;
    position: relative;
    margin-bottom: 15em;
    
    @media (max-width: 500px) {
        min-width: 90%;
        min-height: 100%;
        margin-bottom: 25em;
    }


`

export const PageTitle = styled.h1`
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: var(--fontsize-XXL);
`

export const ProductDiv = styled.div`
    border: 1px solid black;
    border-radius: var(--radius-small);
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 1em;;
    font-size: 1.3em;
    font-weight: 600;
    box-shadow: var(--shadow-normal);
    transition: 0.2s;
    min-height: 5em;
    overflow: hidden;
    padding-right: 1em;
    width: 90%;
    background-image: url( ${pattern}) ;
    
    &:hover {
        cursor: pointer;
        transition: 0.2s;
        box-shadow: var(--shadow-hover);
        transform: var(--transform-hover);
    }
    
    @media (max-width: 500px) {
        text-align: center;
        flex-direction: column;
        min-height: 15em;
        padding-right: unset;
    }
`

export const ImageDiv = styled.div`
    display: flex;
    width: 30%;
    min-width: fit-content;
    height: 100%;
    overflow: hidden;
    border: 1px solid black;

    @media (max-width: 500px) {
        width: 100%;
    }
`

export const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* overflow: hidden; */
    font-size: var(--fontsize-small);
    flex-wrap: wrap;
`

export const ParaProductName = styled.p`
    font-weight: 500;
    font-size: var(--fontsize-medium);
    `
export const ParaProductPrice = styled.p`
    font-weight: 500;
    font-size: var(--fontsize-small);
`

export const ButtonsDiv = styled.div`
    display: flex;
    column-gap: 0.5em;
    /* flex-wrap: wrap; */
`

export const Button = styled.button`
    /* padding: 0.1em 0.3em; */
    /* margin: 1em 0em; */
    font-size: 1.5em;
    color: white;
    /* border-radius: 100%; */
    border: none;
    transition: 0.2s;

    &:hover {
        transition: 0.2s;
        /* transform: var(--transform-hover); */
        box-shadow: var(--shadow-hover);
    }
`

export const CartBtn = styled.img`
    max-width: 40px;
    transition: 0.2s;

    &:hover {
        filter: hue-rotate(110deg);
    }

`

export const PricePara = styled.p`
    margin: 0.5em 3em;
    font-size: 1.5em;
    flex-grow: 1;
    text-align: center;
`

export const NavButton = styled(Link)`
    border: 1px solid #000000;
    padding: 0.5em;
    margin: 1em;
    background: #313131;
    color: white;
    transition: 0.2s;
    font-size: var(--fontsize-medium);
    border-radius: var(--radius-small);
    text-align: center;

    &:hover {
        background: white;
        color: black;
        transition: 0.2s;
    }
    
    @media (max-width: 500px) {
        width: 90%;
    }
`

export const BottomDiv = styled.div`
    border-top: 1px solid black;
    background-color: #000000;
    height: 7em;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0em;
    margin-top: 2em;
    color: white;

    @media (max-width: 500px) {
        padding: unset;
        margin: unset;
        flex-direction: column;
        height: fit-content
    }
`

export const StyledNavLink = styled(NavLink)`
    width: 100%;
`