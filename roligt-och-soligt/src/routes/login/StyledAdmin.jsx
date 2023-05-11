import styled from "styled-components";
import { NavLink } from "react-router-dom";
import pattern from '../../assets/pattern.jpg'

export const PageDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


`

export const PageTitle = styled.h1`
    margin-top: 2em;
    margin-bottom: 1em;
    font-size: var(--fontsize-XXL);
    text-align: center;

    @media (max-width: 500px) {
        font-size: 2em;
    }
`

export const SectionTitle = styled.p`
    font-weight: 600;
    font-size: 1.4em;
    align-self: flex-start;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 35em;

    @media (max-width: 500px) {
        width: 80%;
        row-gap: 1.5em;
    }
`
export const ParaFieldName = styled.p`
    align-self: start;
`

export const InputField = styled.input`
    padding: 0.5em;
    /* max-width: 25em; */
    width: 100%;
`

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* flex-wrap: wrap; */
    width: 100%;
    min-width:31em;
    height: 5em;

    @media(max-width: 500px) {
        min-width: unset;
    }
`

export const LoginButton = styled.button`
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
`

export const ContentDiv = styled.div`
    border: 1px solid var(--color-light-sea-green);
    border-radius: var(--radius-medium);
    /* width: 80%; */
    min-height: fit-content;
    box-shadow: var(--shadow-normal);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background: #FFFFFF;

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
        width: 100%;
        justify-items: center;
    }
`

export const UserDiv = styled.div`
    border: 1px solid black;
    max-width: 10em;
    height: 14em;
    margin: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: var(--radius-small);
    /* transition: 0.2s; */
    box-shadow: var(--shadow-normal);
    background-image: url( ${pattern} ) ;
    
    &:hover {
        outline: 2px solid var(--color-light-sea-green);
    }
`
export const UserImageDiv = styled.div`
    /* border: 1px dashed gray; */
    width: 80%;
    height: 50%;
    margin-top: 0.5em;
    overflow: hidden;
    `

export const UserImage = styled.img`
    width: 100%;
`

export const UserName = styled.p`
    margin: 0.5em;
    font-size: 1em;
    font-weight: 600;
    text-align: center;
`

export const EditIcon = styled.img`
    margin-top: 1em;
    height: 2em;
    padding: 0.1em 1em;
    border-radius: var(--radius-medium);
    filter: grayscale();
    transition: 0.1s;
    
    &:hover {
        filter: hue-rotate(0deg);
        transition: 0.1s;
        transform: scale(110%);
    }
`

export const ErrorMessageUser = styled.p`
    font-size: 0.8em;
    color: #ff0000;
`

export const Message = styled.p`
    font-size: 0.8em;
`

export const StyledNavLink = styled(NavLink)`
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
`

export const ButtonsDiv = styled.div`
    display: flex;
`