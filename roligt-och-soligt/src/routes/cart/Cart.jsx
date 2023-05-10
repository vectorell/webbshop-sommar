import { useRecoilState } from "recoil"
import { cartState } from "../../recoil/atom/cartState/cartState"
import { PageDiv, ProductDiv, ImageDiv, ProductImage, ButtonsDiv, Button, PageTitle, NavButton, PricePara, BottomDiv, ParaProductName, ParaProductPrice } from "./StyledCart"

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
                            <div>
                                <ParaProductName> {product.name} </ParaProductName>
                                <ParaProductPrice> {product.price}:- </ParaProductPrice>
                            </div>
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