import { useParams } from "react-router-dom"
import products from "../../assets/products.js"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

function ProductDetails() {
    const {id} = useParams()
    const [product, setProduct] = useState(null)

    function findProduct(id) {
        return products.find(product => product.productId == id)
    }

    useEffect(() => {
        setProduct(findProduct(id))
    },[id])

    const PageTitle = styled.h1`
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 3em;
    `

    const ProductDiv = styled.div`
    border: 1px solid #0000007d;
    border-radius: var(--radius-small);
    background-color: white;
    padding: 0.5em;
    margin: 0.5em;
    height: 50em;
    // max-width: 15em;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: var(--shadow-normal);
    transition: 0.2s;
    `

    const ProductImage = styled.img`
        width: 100%;
        // height: 70%;
        object-fit: cover;
        overflow: hidden;
    `

    const ProductInfo = styled.div`
        display: flex;
        flex-direction: column;
        // justify-content: space-between;
        row-gap: 2em;
        padding: 1em; 
    `

    const ButtonsDiv = styled.div`
        display: flex;
        column-gap: 1em;
    `
    const ButtonLink = styled(Link)`
        padding: 1em 1.5em;
        border: 1px solid black;
        border-radius: var(--radius-small);
        box-shadow: var(--shadow-normal);
        transition: 0.2s;
        border: none;
        font-weight: 600;

        &:hover {
            transition: 0.2s;
            box-shadow: var(--shadow-hover);
            transform: scale(103%);
        }

        &:active {
            transition: 0s;
            box-shadow: var(--shadow-active);
            transform: scale(97%);
        }

        &:nth-child(1) {
            background-color: green;
            color: white;
        }
        &:nth-child(2) {
            background-color: var(--color-tangerine);
            color: white;
        }

        &:nth-child(3) {
            align-self: flex-start;
            
            margin: 1em;
            border: 1px solid #0000003d;
        }
    `

    return (
        <>
            <PageTitle> Produktdetaljer </PageTitle>
            <ProductDiv>

            {product && 
                <>
                    <ProductImage src={ product.picture } alt={product.name}/>
                    <ProductInfo>
                        <h1> {product.name} </h1>
                        <p> { product.description } </p>
                        <p> { product.price }:- </p>
                        <ButtonsDiv>
                            <ButtonLink> Lägg till i kundvagn </ButtonLink>
                            <ButtonLink> Till kundvagn </ButtonLink>
                        </ButtonsDiv>
                    </ProductInfo>
                </>
            }
            </ProductDiv>
            <ButtonLink to="/products"> Tillbaka </ButtonLink>
        </>
    )
}

export default ProductDetails