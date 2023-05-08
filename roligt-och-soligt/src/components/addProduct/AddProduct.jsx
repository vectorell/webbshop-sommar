import { Link } from "react-router-dom"
import defaultImage from '../../assets/product-images/default.jpg'

/** STYLED COMPONENTS */
import { ProductCard, ProductTitle, ProductImageDiv, ProductImage, ProductsContainer, PageDiv, PageTitle, ProductPrice, LinkDiv, StyledLink  } from "../../routes/products/StyledProducts.jsx"


function AddProduct() {



    return (
        <>
            <Link to={`/admin/products/add-product`}>
                    <ProductCard >
                        <ProductImageDiv>
                            <ProductImage src={defaultImage} alt="bild"/>
                        </ProductImageDiv>
                        <ProductTitle> Lägg till ny produkt </ProductTitle>
                    </ProductCard>
            </Link>
        </>
    )
}

export default AddProduct