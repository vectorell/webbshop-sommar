import styled from "styled-components"
import productList from "../../recoil/atom/products/products.js"
import { Link, NavLink } from "react-router-dom"
import Search from "../../components/search/Search.jsx"
import { useRecoilState } from "recoil"
import { searchState } from "../../recoil/atom/searchState/searchState.js"
import { searchResults } from "../../recoil/atom/searchResults/searchResults.js"
import Filter from "../../components/filter/Filter.jsx"

/** STYLED COMPONENTS */
import { PageTitle } from "./StyledProducts.jsx"
import { PageDiv } from "./StyledProducts.jsx"
import { ProductsContainer } from "./StyledProducts.jsx"
import { ProductCard } from "./StyledProducts.jsx"
import { ProductTitle } from "./StyledProducts.jsx"
import { ProductImageDiv } from "./StyledProducts.jsx"
import { ProductImage } from "./StyledProducts.jsx"
import { ProductPrice } from "./StyledProducts.jsx"
import { LinkDiv } from "./StyledProducts.jsx"
import { StyledLink } from "./StyledProducts.jsx"



function Products() {

    const [products, setProducts] = useRecoilState(productList)
    const [isSearchDirty, setIsSearchDirty] = useRecoilState(searchState)
    const [foundProducts, setFoundProducts] = useRecoilState(searchResults)

    

    return (
        <PageDiv>

        <PageTitle> Produkter </PageTitle>

        <Search/>


            <ProductsContainer>
                {(isSearchDirty ? foundProducts : products).map((product, index) => (
                    <Link key={index} to={`/products/${product.productId}`}>
                    <ProductCard >
                        <ProductImageDiv>
                            <ProductImage src={product.picture}/>
                        </ProductImageDiv>
                        <ProductTitle> {product.name} </ProductTitle>
                        <ProductPrice> {product.price}:- </ProductPrice>
                    </ProductCard>
            </Link>
                ))}
            </ProductsContainer>
            <LinkDiv>
                <StyledLink to="/"> Tillbaka till start </StyledLink>
                <StyledLink to="/cart"> Till kundvagnen </StyledLink>

            </LinkDiv>
        
            </PageDiv>
    )
}

export default Products