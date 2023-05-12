import styled from "styled-components"
import { Link, NavLink } from "react-router-dom"
import pattern from '../../assets/pattern.jpg'


export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    /* width: 50%; */
    max-height: 100%;

    @media (max-width: 500px) {
        width: 100%;
    }
`
export const DivErrorMsg = styled.div`
    height: 1em;
`

export const ParaErrorMsg = styled.p`
        color: red;
    @media (max-width: 500px) {
        font-size: 0.9em;
    }
`

export const PageDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PageTitle = styled.h1`
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: var(--fontsize-XXL);

    @media (max-width: 500px) {
        font-size: 2em;
    }
`

export const ProductDiv = styled.div`
    border: 1px solid #0000007d;
    border-radius: var(--radius-small);
    background-image: url( ${pattern} );
    padding: 0.5em;
    margin: 0.5em;
    height: 60em;
    max-width: 50em;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: var(--shadow-normal);
    transition: 0.2s;
`

export const ProductImage = styled.img`
    width: 100%;
    /* height: 70%; */
    object-fit: stretch;
    overflow: hidden;
    `
export const DivProductImage = styled.div`
    /* border: inset; */
`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    row-gap: 2em;
    padding: 1em; 

    @media (max-width: 500px) {
        align-items: center;
        text-align: center;
    }
`

export const ParaProductName = styled.p`
    font-size: var(--fontsize-XL);
    font-weight: 600;
`

export const ParaProductDescription = styled.p`
    font-size: var(--fontsize-smallmedium);
`

export const ParaProductPrice = styled.p`
    font-size: var(--fontsize-medium);
`

export const ButtonsDiv = styled.div`
    display: flex;
    column-gap: 1em;
    align-self: flex-start;
`
export const ButtonLink = styled(Link)`
    border: 1px solid #000000;
    padding: 0.5em;
    background: #313131;
    color: white;
    transition: 0.2s;
    font-size: var(--fontsize-medium);
    border-radius: var(--radius-small);
    margin: 0.5em;

    &:active {
        background: none;
        color: black;
    }

    &:hover {
        transition: 0.2s;
        box-shadow: var(--shadow-hover);
        transform: scale(103%);
    }

    &:active {
        transition: 0s;
        box-shadow: var(--shadow-active);
        transform: scale(97%);
    }

    @media(max-width: 500px) {
        font-size: var(--fontsize-small);
    }
`
export const ButtonLinkAddToCart = styled.button`
    padding: 0.5em;
    background: #56915e;
    color: white;
    transition: 0.2s;
    font-size: 1.5em;
    border-radius: var(--radius-small);
    text-align: center;
    align-self: flex-start;

    &:hover {
        transition: 0.2s;
        box-shadow: var(--shadow-hover);
        transform: scale(103%);
    }
    
    &:active {
        background: linear-gradient(230deg, #FFFFFF, #56915e 55%);
        transition: 0.2s;
        /* color: black; */
    }
`
export const DivAddToCart = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1em;
    justify-items: center;
    
    @media(max-width: 500px) {
        flex-direction: column;
    }
`

export const InputField = styled.input`
    font-size: var(--fontsize-small);

    &:focus::placeholder {
        opacity: 0;
    }
`