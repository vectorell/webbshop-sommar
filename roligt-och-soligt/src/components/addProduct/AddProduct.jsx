import { Link } from "react-router-dom"

/** STYLED COMPONENTS */
import { PageTitle } from "../../routes/products/StyledProducts.jsx"
import { PageDiv } from "../../routes/products/StyledProducts.jsx"
import { ProductsContainer } from "../../routes/products/StyledProducts.jsx"
import { ProductCard } from "../../routes/products/StyledProducts.jsx"
import { ProductTitle } from "../../routes/products/StyledProducts.jsx"
import { ProductImageDiv } from "../../routes/products/StyledProducts.jsx"
import { ProductImage } from "../../routes/products/StyledProducts.jsx"
import { ProductPrice } from "../../routes/products/StyledProducts.jsx"
import { LinkDiv } from "../../routes/products/StyledProducts.jsx"
import { StyledLink } from "../../routes/products/StyledProducts.jsx"

function AddProduct() {



    return (
        <>
            <Link to={`/admin/products/add-product`}>
                    <ProductCard >
                        <ProductImageDiv>
                            <ProductImage/>
                        </ProductImageDiv>
                        <ProductTitle> Lägg till ny produkt </ProductTitle>
                    </ProductCard>
            </Link>
        </>
    )
}

export default AddProduct