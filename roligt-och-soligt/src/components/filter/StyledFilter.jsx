import styled from "styled-components"

export const FilterDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1em;
    /* border: 1px solid white; */
    background-color: black;
    margin: 0.5em;
    padding: 0.5em;
    color: white;
    /* font-size: 1.2em; */
    /* width: 55%; */
    border-radius: var(--radius-medium);
`

export const Button = styled.button`
    border: 1px solid #000000;
    padding: 0.5em;
    background: #313131;
    color: white;
    transition: 0.2s;
    font-size: 0.8em;
    border-radius: var(--radius-small);

    &:hover {
        background: white;
        color: black;
        transition: 0.2s;

    }
`