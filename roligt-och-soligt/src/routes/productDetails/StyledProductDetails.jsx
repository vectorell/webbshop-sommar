import styled from "styled-components"
import { Link, NavLink } from "react-router-dom"

export const PageDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PageTitle = styled.h1`
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 3em;

    @media (max-width: 500px) {
        font-size: 2em;
    }
`

export const ProductDiv = styled.div`
    border: 1px solid #0000007d;
    border-radius: var(--radius-small);
    background: linear-gradient(130deg, #FFFFFF 75%, var(--color-jonquil) );
    padding: 0.5em;
    margin: 0.5em;
    /* height: 50em; */
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
    object-fit: cover;
    overflow: hidden;
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
    font-size: 1.1em;
    border-radius: var(--radius-small);
    margin: 1em;

    &:active {
        background: linear-gradient(230deg, #FFFFFF 55%, var(--color-jonquil) 55%, #ffffff);;
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
`
export const ButtonLinkAddToCart = styled.button`
    /* border: 1px solid #000000; */
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