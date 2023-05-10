import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const PageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 50%;

    @media (max-width: 500px) {
        max-width: unset;
    }
`
export const WelcomeCardDiv = styled.div`
    border: 1px solid #cdcdcd;
    background: linear-gradient(230deg, #FFFFFF 55%, var(--color-jonquil) 55%, #ffffff 80%);
    margin: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 40em;
    box-shadow: var(--shadow-normal);   

    @media (max-width: 500px) {
        width: 90%;
        min-height: fit-content;
    }
`
export const MainInfoDiv = styled.div`
    padding: 1em;
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
    text-align: center;
    
    &:hover {
        background: white;
        color: black;
        transition: 0.2s;
        
    }
    @media (max-width: 500px) {
        margin-top: 1em;
    }
`

export const ImageElement = styled.img`
    overflow: hidden;
    object-fit: stretch;
    width: 100%;
    padding: 1em;
`