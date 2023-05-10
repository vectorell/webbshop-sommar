import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const PageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const WelcomeCardDiv = styled.div`
    border: 1px solid #cdcdcd;
    margin: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    min-height: 40em;
    box-shadow: var(--shadow-normal);   

    @media (max-width: 500px) {
        width: 90%;
        min-height: fit-content;
    }
`
export const MainInfoDiv = styled.div`
    /* border: 1px dashed green; */
    display: flex;
    column-gap: 5em;

    @media (max-width: 500px) {
        flex-direction: column;
    }
`
export const InfoDiv = styled.div`
    /* border: 1px dashed green; */
`

export const PageTitle = styled.h1`
    margin-top: 1em;
`

export const InfoTitle = styled.p`
    margin-top: 0.5em;
    font-weight: 600;
    font-size: 1.3em;
`
export const ProductsButton = styled(NavLink)`
    border: 1px solid #000000;
    padding: 0.5em;
    background: #313131;
    color: white;
    transition: 0.2s;
    font-size: 1.5em;
    border-radius: var(--radius-small);
    margin: 1em;
    text-align: center;

    &:hover {
        background: white;
        color: black;
        transition: 0.2s;

    }
`

export const ImageElement = styled.img`
    overflow: hidden;
    object-fit: stretch;
    width: 100%;
    padding: 1em;
`