import styled from "styled-components"
import { Link } from "react-router-dom"

export const PageDiv = styled.div`
    /* border: 1px solid black; */
    width: 100%;
    height: fit-content;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1em;
    position: relative;

    @media (max-width: 500px) {
        min-height: 100%;
    }
`

export const PageTitle = styled.h1`
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 3em;
`

export const ProductDiv = styled.div`
    border: 1px solid black;
    width: 70%;
    /* padding: 2em; */
    border-radius: var(--radius-small);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3em;
    font-weight: 600;
    box-shadow: var(--shadow-normal);
    transition: 0.2s;
    height: 5em;
    overflow: hidden;
    padding-right: 1em;
    
    &:hover {
        cursor: pointer;
        transition: 0.2s;
        box-shadow: var(--shadow-hover);
        transform: var(--transform-hover);
    }

    /* &:active {
        transition: 0s;
        box-shadow: var(--shadow-active);
        transform: var(--transform-active);
    } */

    @media (max-width: 500px) {
        flex-direction: column;
        height: unset;
        padding-right: unset;
    }
`

export const ImageDiv = styled.div`
    width: 30%;
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
`
export const ButtonsDiv = styled.div`
    display: flex;
    column-gap: 1em;
`

export const Button = styled.button`
    padding: 0.25em 0.6em;
    margin: 1em 0em;
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

    &:nth-child(1) {
        background-color: red;
    }
    &:nth-child(2) {
        background-color: green;
    }
`
export const PricePara = styled.p`
    margin: 0.5em 3em;
    font-size: 2em;
    flex-grow: 1;
`


export const NavButton = styled(Link)`
    border: 1px solid black;
    padding: 2em 0em;
    margin: 1em;
    font-size: 1.4em;
    border-radius: var(--radius-small);
    box-shadow: var(--shadow-normal);
    transition: 0.2s;
    background-color: #FFFFFF;
    flex-grow: 1;
    text-align: center;
    width: 12em;

    &:hover {
        transition: 0.2s;
        transform: var(--transform-hover);
        box-shadow: var(--shadow-hover);
    }
    
    &:active {
        transition: 0s;
        transform: var(--transform-active);
        box-shadow: var(--shadow-active);
    }

    @media (max-width: 500px) {
        padding: 1em;
        width: 80%;
    }


`

export const BottomDiv = styled.div`
    border-top: 1px solid black;
    background-color: #000000;
    height: 10em;
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