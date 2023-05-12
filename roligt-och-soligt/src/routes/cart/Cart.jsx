import { useRecoilState } from "recoil"
import { cartState } from "../../recoil/atom/cartState/cartState"
import { CartBtn ,PageDiv, ProductDiv, ImageDiv, ProductImage, ButtonsDiv, Button, PageTitle, NavButton, PricePara, BottomDiv, ParaProductName, ParaProductPrice, StyledNavLink } from "./StyledCart"
import deleteBtn from '../../assets/x-button.png'
import addBtn from '../../assets/plus.png'
import { addToCart } from "./cartFunction"
import { removeFromCart } from "./cartFunction"
import { useEffect, useState } from "react"

function Cart() {
    const [cart, setCart] = useRecoilState(cartState)
    
    const totalPrice = cart.reduce((acc, product) => {
        return acc + product.price * product.amount
    },0)

    // function removeFromCart(index) {
    //     const newCart = [...cart]
    //     newCart.splice(index, 1)
    //     setCart(newCart)
    // }

    
    // function countDuplicates(product, event) {
    //     console.log(product)
    //     const duplicates = cart.reduce((acc, product) => {

    //         // Om acc inte har en nyckel med produktens id, skapa en och sätt värdet till 1
    //         if (!acc[product.id]) {
    //             acc[product.id] = 1
    //         }

    //         // Om acc redan har en nyckel med produktens id, öka värdet med 1
    //         else {
    //             acc[product.id] += 1
    //         }

    //         return acc

    //     }, {})
    //     console.log(duplicates)
        
    // }
    // function countProductsInCart(product) {
    //     return cart.reduce((count, item) => {
    //       if (item.id === product.id) {
    //         return count + 1;
    //       }
    //       return count;
    //     }, 0);
    //   }

    // function addToCart (product, cart, setCart) {

    // }
    

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
                                <div>
                                <StyledNavLink key={index} to={`/products/${product.id}`}>
                                    <ParaProductName> {product.name} </ParaProductName>
                                    <ParaProductPrice> {product.price}:- st </ParaProductPrice>
                                     <p> {product.amount} st </p> 
                                </StyledNavLink>
                                </div>
                                <ButtonsDiv>
                                    <CartBtn src={deleteBtn} onClick={()=> removeFromCart(product, cart, setCart, index)}/>
                                    <CartBtn src={addBtn} onClick={()=> 
                                        {addToCart(product, cart, setCart)}
                                        }/>
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