import styled from "styled-components";

export const PageTitle = styled.h1`
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 3em;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 1em;
`

export const InputField = styled.input`
    padding: 0.5em 1em;
`

export const InputDiv = styled.div`
    
`

export const LoginButton = styled.button`
    
`

export const ContentDiv = styled.div`
    border: 1px solid var(--color-light-sea-green);
    border-radius: var(--radius-medium);
    width: 80%;
    min-height: 15em;
    box-shadow: var(--shadow-normal)
`

export const UserDiv = styled.div`
    border: 1px solid black;
    max-width: 9em;
    height: 14em;
    margin: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: var(--radius-small);
    transition: 0.2s;
    box-shadow: var(--shadow-normal);
    
    &:hover {
        transition: 0.2s;
        transform: var(--transform-hover);
        box-shadow: var(--shadow-hover);
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

export const UserName = styled.div`
    margin: 0.5em;
    font-size: 1.2em;
    font-weight: 600;
`

export const EditIcon = styled.img`
    margin-top: 1em;
    height: 15%;
    transition: 0.2s;
    padding: 0.1em 1em;
    border-radius: var(--radius-medium);
    
    &:hover {
        transition: 0.2s;
        background-color: var(--color-colombia-blue);
    }
`