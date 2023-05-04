import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { cartState } from "../../recoil/atom/cartState/cartState"

/** Styled Components */
import { PageDiv } from "./StyledCart"
import { ProductDiv } from "./StyledCart"
import { ImageDiv } from "./StyledCart"
import { ProductImage } from "./StyledCart"
import { ButtonsDiv } from "./StyledCart"
import { Button } from "./StyledCart"
import { PageTitle } from "./StyledCart"
import { NavButton } from "./StyledCart"
import { PricePara } from "./StyledCart"
import { BottomDiv } from "./StyledCart"

function Cart() {
    const [cart, setCart] = useRecoilState(cartState)
    
    const totalPrice = cart.reduce((acc, product) => {
        return acc + product.price
    },0)

    function removeFromCart(index) {
        const newCart = [...cart]
        newCart.splice(index, 1)
        setCart(newCart)
    }

    function addAnotherToCart(product) {
        setCart(prevCart => [...prevCart, product])
    }

    return (
        <>
            <PageDiv>
                <PageTitle> Kundvagn </PageTitle>
                {cart.map((product, index) => {
                    return (
                        <ProductDiv key={index}>
                            <ImageDiv>
                                <ProductImage src={product.picture} alt={product.name}/>
                            </ImageDiv>
                            <p> {product.name} </p>
                            <p> {product.price}:- </p>
                            <ButtonsDiv>
                                <Button onClick={()=> removeFromCart(index)}> - </Button>
                                <Button onClick={()=> addAnotherToCart(product)}> + </Button>
                            </ButtonsDiv>

                        </ProductDiv>
                    )
                })}

            </PageDiv>
                <BottomDiv>
                    <div>
                        <PricePara> Totalt belopp: </PricePara>
                        <PricePara> {totalPrice}:- </PricePara>
                    </div>
                    <NavButton to="/products"> {'< '}Tillbaka till produkter</NavButton>
                    <NavButton> Till kassan {'>'} </NavButton>
                </BottomDiv>
        </>
    )

}

export default Cart