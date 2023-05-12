export function addToCart (product, cart, setCart) {

    const copy = [...cart]
    const check = copy.find(prod => prod.id === product.id)
    
    if (!check) {

        let modifiedProduct = { ...product, amount: 1}
        setCart([...cart, modifiedProduct])
        
    } else {

        let modifiedProduct = { ...check }
        modifiedProduct.amount = modifiedProduct.amount + 1

        const productIndex = copy.findIndex( i => i.id == check.id )
        copy.splice(productIndex, 1, modifiedProduct)
        setCart(copy)
    }   
}

export function removeFromCart (product, cart, setCart, index) {

    const copy = [...cart]
    const check = copy.find(prod => prod.id === product.id)
    let modifiedProduct = { ...check }

    // while (check.amount > 0) {
    //     modifiedProduct.amount = modifiedProduct.amount - 1
    // }

    console.log(check.amount, ' st i kundvagnen')

    if (check.amount > 1) {
        modifiedProduct.amount -= 1
        const productIndex = copy.findIndex( i => i.id == check.id )
        const updatedCart = copy.splice(productIndex, 1, modifiedProduct)
        setCart(copy)
    } else {
        const newCart = [...cart]
        newCart.splice(index, 1)
        setCart(newCart)
    }
}   
