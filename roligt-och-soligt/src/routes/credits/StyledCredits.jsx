import styled from "styled-components";

export const PageDiv = styled.div`
    margin: 1em;
    display: flex;
    flex-direction: column;
    row-gap: 1em;
`

export const LiTitle = styled.p`
    font-size: 1.2em;
    font-weight: 600;
    `

export const DivUl = styled.div`
    /* border: 1px solid green; */
    
    `

export const UlElement = styled.ul`
    list-style-type: none ;
    /* border: 1px solid #9c9c9c; */
    border-radius: var(--radius-medium);
    box-shadow: var(--shadow-normal);
`

export const LiElement = styled.li`
    padding: 0.2em 0.5em;
    /* border: 1px solid black; */
    
    &:nth-child(odd) {
        background-color: var(--color-colombia-blue);
    }
`