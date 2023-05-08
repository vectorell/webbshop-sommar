import { useEffect, useState } from "react"
import { cartState } from "../../recoil/atom/cartState/cartState.js"
import { useRecoilState } from "recoil"
import { useParams } from "react-router-dom"
import productList from "../../recoil/atom/products/products.js"

/** Imports for styled components **/
import { PageTitle, ProductDiv, ProductImage, ProductInfo, ButtonsDiv, ButtonLink } from "./StyledProductDetails.jsx"

function ProductDetails() {
    const {id} = useParams()
    const [product, setProduct] = useState(null)
    const [cart, setCart] = useRecoilState(cartState)
    const [products, setProducts] = useRecoilState(productList)

    function findProduct(id) {
        return products.find(product => product.productId == id)
    }

    useEffect(() => {
        setProduct(findProduct(id))
    },[id])




    function addProductToCart(id) {
        setCart(prevCart => [...prevCart, id])
        console.log(cart)
    }

    

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
                            <ButtonLink onClick={() => addProductToCart(findProduct(id))}> Lägg till i kundvagn </ButtonLink>
                            <ButtonLink to="/cart"> Till kundvagn </ButtonLink>
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