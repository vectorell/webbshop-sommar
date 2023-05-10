import styled from "styled-components";

export const SearchDiv = styled.div`
    display: flex;
    /* flex-direction: column; */
    align-items: flex-end;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 1em;
    border-radius: var(--radius-medium);
    background-color: black;
    /* margin: 0.5em; */
    padding: 0.5em;
    color: white;
    font-size: 1.2em;
    width: 100%;
`

export const DivSearchField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
`
export const ParaFieldText = styled.p`
    font-size: 0.8em;
`

export const SearchInput = styled.input`
    width: 100%;
    padding: 0.5em 1em;
`
export const Button = styled.button`
    /* color: green; */
    padding: 0.5em 1em;
`