import productList from "../../recoil/atom/products/products.jsx"
import { Link } from "react-router-dom"
import Search from "../../components/search/Search.jsx"
import { useRecoilState } from "recoil"
import { searchState } from "../../recoil/atom/searchState/searchState.js"
import { searchResults } from "../../recoil/atom/searchResults/searchResults.js"
import AddProduct from "../../components/addProduct/AddProduct.jsx"
import { productListToUpload, uploadProduct } from "../../utils.js"
import { PageTitle, PageDiv, ProductsContainer, ProductCard, ProductTitle, ProductImageDiv, ProductImage, ProductPrice, LinkDiv, StyledLink } from "./StyledAdminProducts.jsx"

function AdminProducts() {

    const [products, setProducts] = useRecoilState(productList)
    const [isSearchDirty, setIsSearchDirty] = useRecoilState(searchState)
    const [foundProducts, setFoundProducts] = useRecoilState(searchResults)

    function eraseAllProducts() {
        products.forEach(product => deleteProductById(product.id))
    }

    function resetAllProducts() {
        productListToUpload.forEach(product => uploadProduct(product))
    }

    return (
        <PageDiv>

        <PageTitle> Produkter (admin) </PageTitle>
        {/* <button onClick={eraseAllProducts}> RADERA ALLT </button>
        <br/>
        <button onClick={resetAllProducts}> ÅTERSTÄLL ALLT </button> */}

        <Search/>


            <ProductsContainer>

                <AddProduct />
                
                {(isSearchDirty ? foundProducts : products).map((product, index) => (
                    <Link key={index} to={`/admin/products/${product.id}`}>
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

export default AdminProducts