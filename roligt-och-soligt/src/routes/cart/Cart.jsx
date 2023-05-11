import { useRecoilState } from "recoil"
import { cartState } from "../../recoil/atom/cartState/cartState"
import { CartBtn ,PageDiv, ProductDiv, ImageDiv, ProductImage, ButtonsDiv, Button, PageTitle, NavButton, PricePara, BottomDiv, ParaProductName, ParaProductPrice, StyledNavLink } from "./StyledCart"
import deleteBtn from '../../assets/x-button.png'
import addBtn from '../../assets/plus.png'

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

    function countDuplicates(product) {
        let count = 1
        cart.forEach(item => {
            if (cart.includes(item)) {
                count++
                console.log(count, 'innehåller detta')
            } else { console.log('innehåller ej detta') }
        })
        
    }

    

    return (
        <>
            <PageDiv>
                <PageTitle> Kundvagn </PageTitle>
                {cart.map((product, index) => {
                    return (
                        <ProductDiv>
                                <ImageDiv>
                                    <ProductImage src={product.picture} alt={product.name}/>
                                </ImageDiv>
                                <div>
                                <StyledNavLink key={index} to={`/products/${product.id}`}>
                                    <ParaProductName> {product.name} </ParaProductName>
                                    <ParaProductPrice> {product.price}:- </ParaProductPrice>
                                </StyledNavLink>
                                </div>
                                <ButtonsDiv>
                                    <CartBtn src={addBtn} onClick={()=> 
                                        {addAnotherToCart(product)
                                        countDuplicates(product)}
                                        }/>
                                    <CartBtn src={deleteBtn} onClick={()=> removeFromCart(product)}/>
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