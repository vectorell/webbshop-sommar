import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const PageTitle = styled.h1`
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: var(--fontsize-XXL);
`

export const PageDiv = styled.div`
    padding-bottom: 2em;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    padding-bottom: 2em;

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`

export const ProductCard = styled.div`
    border: 1px solid #0000007d;
    border-radius: var(--radius-small);
    background-color: white;
    padding: 0.5em;
    margin: 0.5em;
    height: 22em;
    max-width: 15em;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: var(--shadow-normal);
    transition: 0.2s;

    &:hover {
    transition: 0.2s;
    transform: scale(105%);
    box-shadow: var(--shadow-hover);
    }

    &:active {
    transition: 0s;
    transform: scale(97%);
    box-shadow: var(--shadow-active);
    }
`

export const ProductTitle = styled.h2`
    font-size: 1em;
`

export const ProductImageDiv = styled.div`
    min-height: 70%;
    max-height: 70%;
    width: 100%;
    overflow: hidden;
`

export const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const ProductPrice = styled.p`

`

export const LinkDiv = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-around;
    margin-top: 2em;
    margin-bottom: 2em;

    @media (max-width: 500px) {
        flex-direction: column;
        row-gap: 1em;
    }
`

export const StyledLink = styled(NavLink)`
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