import productList from "../../recoil/atom/products/products.jsx"
import { Link } from "react-router-dom"
import Search from "../../components/search/Search.jsx"
import { useRecoilState } from "recoil"
import { searchState } from "../../recoil/atom/searchState/searchState.js"
import { searchResults } from "../../recoil/atom/searchResults/searchResults.js"
import isLoadingAPI from "../../recoil/atom/isLoadingAPI/isLoadingAPI.js"
import { PageTitle, PageDiv, ProductsContainer, ProductCard, ProductTitle, ProductImageDiv, ProductImage, ProductPrice, LinkDiv, StyledLink } from "./StyledProducts.jsx"



export default function Products() {
    const [products, setProducts] = useRecoilState(productList)
    const [isSearchDirty, setIsSearchDirty] = useRecoilState(searchState)
    const [foundProducts, setFoundProducts] = useRecoilState(searchResults)

    return (
        <PageDiv>
            <PageTitle> Produkter </PageTitle>
            <Search/>
                <ProductsContainer>
                    {(isSearchDirty ? foundProducts : products).map((product, index) => (
                        <Link key={index} to={`/products/${product.id}`}>
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
                    <StyledLink to="/start"> Tillbaka till start </StyledLink>
                    <StyledLink to="/cart"> Till kundvagnen </StyledLink>
                </LinkDiv>
            </PageDiv>
    )
}