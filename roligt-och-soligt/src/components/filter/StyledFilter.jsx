import styled from "styled-components"

export const FilterDiv = styled.div`
    background: linear-gradient(230deg, #FFFFFF 55%, var(--color-jonquil) 55%, #ffffff);
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1em;
    /* border: 1px solid white; */
    background-color: black;
    padding: 0.5em;
    margin-top: 0.5em;
    color: white;
    border-radius: var(--radius-medium);


    @media (max-width: 500px) {
        border-radius: 0em;
    }
`

export const Button = styled.button`
    border: 1px solid #000000;
    padding: 0.5em;
    background: #313131;
    color: white;
    transition: 0.2s;
    font-size: var(--fontsize-small);
    border-radius: var(--radius-small);

    &:hover {
        background: white;
        color: black;
        transition: 0.2s;
    }

    &:active {
        background: white;
        color: black;
        transition: 0.2s;
    }

    @media(max-width: 500px) {
        font-size: 0.9em;
    }
`