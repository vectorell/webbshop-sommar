
const baseUrl = 'https://www.forverkliga.se/JavaScript/api/fe/'
const shopId = 3001

export async function getAllProducts(setProducts) {
    // setSpinnerLoading(true)
    try {
        let response = await fetch(baseUrl + '?action=get-products&shopid=' + shopId)
        const data = await response.json()
        // setProducts(data)
        console.log(data)
        return await data
    } catch (error) {
        console.log('error !')
    }
}

export async function postProductChanges(product, inputTitle, inputPrice, inputDescription) {

    const data = {
        name: inputTitle.current.value !== '' ? inputTitle.current.value : product.name,
        price: inputPrice.current.value !== '' ? Number(inputPrice.current.value) : Number(product.price),
        description: inputDescription.current.value !== '' ? inputDescription.current.value : product.description,
        picture: product.picture,
        shopid: 3001,
        productid: product.id,
    }

    // console.log(data)

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
    
    let response = await fetch((baseUrl + '?action=edit-product'), options)
    console.log(response)
}

export async function postEraseProduct(product) {
    // setSpinnerLoading(true)

    // console.log('eraseProduct körs')
    
    // console.log('try körs')
    const data = { shopid: shopId, productid: product.id }
        
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }
    
    let response = await fetch((baseUrl + '?action=delete-product'), options)
    console.log(response)
    // console.log('utanför try/catch körs')
}

export function validateProductChanges(title, description, price, product) {
    const regexName = /^[-"()=:.,!?0-9a-öA-Ö\s]{2,150}$/
    const regexDescription = /^[-"()=:.,!?0-9a-öA-Ö\s]{2,150}$/
    const regexPrice = /^[0-9]{1,15}$/

    title === '' && (title = product.name)
    description === '' && (description = product.description)
    price === '' && (price = product.price)

    let nameIsValid = regexName.test(title)
    let descriptionIsValid = regexDescription.test(description)
    let priceIsValid = regexPrice.test(price)

    if (nameIsValid && descriptionIsValid && priceIsValid) {
        return true
    } else {
        return false
    }
}