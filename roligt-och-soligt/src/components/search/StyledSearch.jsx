import styled from "styled-components";

export const SearchDiv = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 1em;
    border-radius: var(--radius-medium);
    background-color: black;
    padding: 0.5em;
    color: white;
    font-size: var(--fontsize-medium);
    width: 100%;
    text-align: start;

    @media (max-width: 500px) {
        border-radius: 0em;
    }
`

export const DivSearchField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    
    @media (max-width: 500px) {
        margin-bottom: 0.5em;
        width: 100%;
    }
`

export const ParaFieldText = styled.p`
    font-size: 0.8em;

    @media (max-width: 500px) {
        font-size: 0.75em;
    }
`

export const SearchInput = styled.input`
    width: 100%;
    padding: 0.5em 1em;
    font-size: var(--fontsize-small);

    &:focus::placeholder {
        opacity: 0;
    }
`

export const Button = styled.button`
    /* color: green; */
    padding: 0.5em 1em;
    font-size: var(--fontsize-small);
`