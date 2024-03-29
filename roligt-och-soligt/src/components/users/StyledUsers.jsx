import styled from "styled-components"
import { NavLink } from "react-router-dom";
import pattern from '../../assets/pattern.jpg'

export const PageTitle = styled.h1`
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: var(--fontsize-XXL);
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 35em;
`

export const InputField = styled.input`
`

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    height: 5em;
`

export const LoginButton = styled.button`
    background-color: white;
    /* min-width: 10em; */
    max-width: 10em;
    font-size: 1.2em;
    padding: 0.5em 1em;
    margin: 1em;
    border: 1px solid black;
    border-radius: var(--radius-small);
    box-shadow: var(--shadow-normal);
    transition: 0.2s;
    
    &:hover {
        transition: 0.2s;
        box-shadow: var(--shadow-hover);
        transform: var(--transform-hover);
    }

    &:active {
        transition: 0s;
        box-shadow: var(--shadow-active);
        transform: var(--transform-active);
    }
`

export const ContentDiv = styled.div`
    border: 1px solid var(--color-light-sea-green);
    border-radius: var(--radius-medium);
    /* width: 80%; */
    min-height: 15em;
    box-shadow: var(--shadow-normal);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
        width: 80%;
        justify-items: center;
    }
`

export const UserDiv = styled.div`
    border: 1px solid black;
    max-width: 12em;
    height: 5em;
    margin: 1em;
    display: flex;
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
    background-color: white;
    max-width: 13em;
    font-size: 1.2em;
    padding: 0.5em 1em;
    margin: 2em;
    border: 1px solid black;
    border-radius: var(--radius-small);
    box-shadow: var(--shadow-normal);
    transition: 0.2s;
    
    &:hover {
        transition: 0.2s;
        box-shadow: var(--shadow-hover);
        transform: var(--transform-hover);
    }

    &:active {
        transition: 0s;
        box-shadow: var(--shadow-active);
        transform: var(--transform-active);
    }
`