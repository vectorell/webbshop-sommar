import { useEffect, useState } from "react"
import { cartState } from "../../recoil/atom/cartState/cartState.js"
import { useRecoilState } from "recoil"
import { useParams } from "react-router-dom"
import productList from "../../recoil/atom/products/products.jsx"
import { PageDiv, PageTitle, ProductDiv, ProductImage, ProductInfo, ButtonsDiv, ButtonLink, ButtonLinkAddToCart, DivAddToCart } from "./StyledProductDetails.jsx"

export default function ProductDetails() {
    const {id} = useParams()
    const [product, setProduct] = useState(null)
    const [cart, setCart] = useRecoilState(cartState)
    const [products, setProducts] = useRecoilState(productList)
    const [showAddedText, setShowAddedText] = useState(false)

    function findProduct(id) {
         return products.find( product => product.id == id)
    }

    useEffect(() => {
        setProduct(findProduct(id))
    },[id])

    function addProductToCart(id) {
        setCart(prevCart => [...prevCart, id])
    }
    
    return (
        <PageDiv>
            <PageTitle> Produktdetaljer </PageTitle>
            <ProductDiv>

            {product && 
                <>
                    <ProductImage src={ product.picture } alt={product.name}/>
                    <ProductInfo>
                        <h1> {product.name} </h1>
                        <p> { product.description } </p>
                        <p> { product.price }:- </p>
                    </ProductInfo>
                    <DivAddToCart>
                        <ButtonLinkAddToCart onClick={() => {
                            addProductToCart(findProduct(id))
                            setShowAddedText(true)
                        }}> Lägg till i kundvagn </ButtonLinkAddToCart>
                        {showAddedText && <p> Tillagd i kundvagnen </p>}
                    </DivAddToCart>
                </>
            }
            </ProductDiv>
                    <ButtonsDiv>
                        <ButtonLink to="/products"> Tillbaka </ButtonLink>
                        <ButtonLink to="/cart"> Till kundvagn </ButtonLink>
                    </ButtonsDiv>
        </PageDiv>
    )
}