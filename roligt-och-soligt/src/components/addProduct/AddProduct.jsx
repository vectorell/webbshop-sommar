import { Link } from "react-router-dom"
import defaultImage from '../../assets/product-images/default.jpg'
import { ProductCard, ProductTitle, ProductImageDiv, ProductImage } from "../../routes/products/StyledProducts.jsx"

export default function AddProduct() {
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