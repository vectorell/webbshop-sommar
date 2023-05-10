import defaultPicture from '../src/assets/product-images/default.jpg'
import skateboard from '../src/assets/product-images/skateboard.jpg'
import badboll from '../src/assets/product-images/badboll.jpg'
import vattenpistol from '../src/assets/product-images/vattenpistol.jpg'
import sandpitset from '../src/assets/product-images/sandpitset.jpg'
import drake from '../src/assets/product-images/kite.jpg'
import snorkelset from '../src/assets/product-images/snorkelset2.jpg'
import gatukritor from '../src/assets/product-images/gatukritor.jpg'
import bubblor from '../src/assets/product-images/bubblor.png'
import badminton from '../src/assets/product-images/badminton.jpg'
import slide from '../src/assets/product-images/slide.jpg'
import dart from '../src/assets/product-images/dart.jpg'
import zipline from '../src/assets/product-images/zipline.jpg'

/** VALIDERING ANVÄNDARNAMN ******/
export function validateName(input, errorMessage) {
    const userString = input.current.value
    const regex = /^[a-zA-Z\s]{2,}$/

    userString === '' ? (input.current.classList.add('input'), errorMessage((false)), input.current.classList.remove('invalid'))

    : regex.test(userString) ? (input.current.classList.add('valid'), input.current.classList.remove('invalid'), errorMessage((false)))

    : (input.current.classList.remove('valid'), input.current.classList.add('invalid'), errorMessage((true)))
}

/** VALIDERING LÖSENORD ******/
export function validatePassword(userPasswordInput, setUserPasswordErrorMessage) {
    const userString = userPasswordInput.current.value
    const regex = /^.{8,30}$/

    // userString === '' ? (userPasswordInput.current.className = 'input', setUserPasswordErrorMessage((false)))

    userString === '' ? (userPasswordInput.current.classList.add('input'), setUserPasswordErrorMessage((false)), userPasswordInput.current.classList.remove('invalid'))

    : regex.test(userString) ? (userPasswordInput.current.classList.add('valid'), setUserPasswordErrorMessage((false)), userPasswordInput.current.classList.remove('invalid'))

    : (userPasswordInput.current.classList.add('invalid'), userPasswordInput.current.classList.remove('valid'), setUserPasswordErrorMessage((true)))
}


/** VALIDERING: sökfält */
export function validateSearch(input, inputElement, errorMessage, type) {
    console.log('validateSearch körs')
    inputElement.current.classList.remove('invalid')
    inputElement.current.classList.remove('valid')

    const string = input

    let regex
    type === 'search' ? regex = /^[-"()=:.,!?0-9a-öA-Ö\s]{1,30}$/ :
    type === 'text' ? regex = /^[-"()=:.,!?0-9a-öA-Ö\s]{2,150}$/ :
    type === 'price' ? regex = /^[0-9]{1,15}$/ : null

    regex.test(input) ? console.log('matchar') 
    : console.log('matchar ej')

    
    string === '' ? (inputElement.current.classList.add('input'), errorMessage((false)), inputElement.current.classList.remove('invalid'), inputElement.current.classList.remove('valid'))

    : regex.test(string) ? (inputElement.current.classList.add('valid'), inputElement.current.classList.remove('invalid'), errorMessage((false)))

    : (inputElement.current.classList.remove('valid'), inputElement.current.classList.add('invalid'), errorMessage((true)))
}


/** API-funktioner nedan */
const baseUrl = 'https://www.forverkliga.se/JavaScript/api/fe/'
const shopId = 3001

export async function uploadProduct(product) {
    
    const data = {
        action: 'add-product',
        name: product.name,
        description: product.description,
        picture: product.picture,
        price: product.price,
        shopid: shopId
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    const response = await fetch(baseUrl, options)
    const statusObject = await response.json()
    console.log(statusObject)
    statusObject.stats === 'success' ? true : false

}

export async function deleteProductById(id) {
    const data = {
        action: 'delete-product',
        shopid: shopId,
        productid: id
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    let response = await fetch((baseUrl + '?action=delete-product'), options)
    let statusObject = await response.json()
    console.log(statusObject)
}



export let productListToUpload = [
    {
        name: 'Skateboard',
        price: 249,
        description: 'En skateboard i barnstorlek i trä. Levereras omonterad.',
        picture: skateboard,
        shopId: 3001,
        productId: 1
    },
    {
        name: 'Kubbspel',
        price: 249,
        description: 'Det klassiska kubbspelet. Hur kan det gå fel? ',
        picture: defaultPicture,
        shopId: 3001,
        productId: 2
    },
    {
        name: 'Grävmaskin till sandlåda',
        price: 799,
        description: 'Grävmaskin som fästs i sandlådan. Rostfritt stål.',
        picture: defaultPicture,
        shopId: 3001,
        productId: 3
    },
    {
        name: 'Rutschkana',
        price: 799,
        description: 'En lite större rutschkana för montering i trädgåden till exempel.',
        picture: slide,
        shopId: 3001,
        productId: 4
    },
    {
        name: 'Badboll',
        price: 79,
        description: "En klassisk boll för spel i poolen eller på stranden.",
        picture: badboll,
        shopId: 3001,
        productId: 5
    },
    {
        name: 'Cricketset',
        price: 149,
        description: "Ett komplett cricketset för spel på stranden eller i trädgården.",
        picture: defaultPicture,
        shopId: 3001,
        productId: 6
    },
    {
        name: 'Discgolfkorg',
        price: 869,
        description: 'En korg till discgolf. Monteras genom att slå ned den i marken.',
        picture: defaultPicture,
        shopId: 3001,
        productId: 7
    },
    {
        name: 'Vattenglidbana',
        price: 1199,
        description: 'Känn fartvinden när du susar fram ner till vattnet!',
        picture: defaultPicture,
        shopId: 3001,
        productId: 8
    },
    {
        name: 'Vattenpistol',
        price: 149,
        description: "En rolig vattenleksak för vattenkrig på sommardagen.",
        picture: vattenpistol,
        shopId: 3001,
        productId: 9
    },
    {
        name: 'Barnvattenraket',
        price: 500,
        description: "En rolig vattenleksak för barnen att leka med på stranden eller i poolen.",
        picture: defaultPicture,
        shopId: 3001,
        productId: 10
    },
    {
        name: 'Sandlådekit',
        price: 499,
        description: "Ett kit med alla verktyg som behövs för att bygga fantastiska sandslott.",
        picture: sandpitset,
        shopId: 3001,
        productId: 11
    },
    {
        name: "Barnpool",
        price: 899,
        description: "En uppblåsbar pool för barnen att plaska i på varma sommardagar.",
        picture: defaultPicture,
        shopId: 3001,
        productId: 12
    },
    {
        name: "Badmintonset",
        price: 399,
        description: "Ett komplett badmintonset för spel på stranden eller i trädgården.",
        picture: badminton,
        shopId: 3001,
        productId: 13
    },
    {
        name: "Flygande drake",
        price: 249,
        description: "En vacker drake som flyger högt i luften på en solig dag.",
        picture: drake,
        shopId: 3001,
        productId: 14
    },
    {
        name: 'Zipline Linbana',
        price: 1599,
        description: 'En zipline linbana för dig som vill susa fram genom träden.',
        picture: zipline,
        shopId: 3001,
        productId: 15
    },
    {
        name: 'Snorkelset för barn',
        price: 499,
        description: 'Ett snorkelset med dykmask, fenor samt snorkel i barnstorlek för minnesvärda ögonblick under ytan.',
        picture: snorkelset,
        shopId: 3001,
        productId: 16
    },
    {
        name: 'Dart, tavla och pilar',
        price: 199,
        description: 'Lika kul på förfesten liksom avkoppling i sommarstugan. Levereras med tavla och 5 pilar.',
        picture: dart,
        shopId: 3001,
        productId: 17
    },
    {
        name: 'Såpbubbelset',
        price: 149,
        description: 'Olika verktyg för att skapa bubblor i alla dess former!',
        picture: bubblor,
        shopId: 3001,
        productId: 18
    },
    {
        name: 'Catchball set',
        price: 49,
        description: 'Det klassiska "fånga bollen"-spelet, med två fångare och en boll',
        picture: defaultPicture,
        shopId: 3001,
        productId: 19
    },
    {
        name: 'Gatukritor',
        price: 29,
        description: 'Färglada gatukritor gjorda för asfalt. Färgen är ej permanent och försvinner vid regn.',
        picture: gatukritor,
        shopId: 3001,
        productId: 20
    },
]


// productListToUpload.forEach(product => uploadProduct(product))

export async function addUserToAPI(username, password) {

    const data = {
        username: username,
        password: password,
        shopid: shopId
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    const response = await fetch((baseUrl + '?action=add-user'), options)
    const statusObject = await response.json()
    console.log(statusObject)
    statusObject.stats === 'success' ? true : false

}

// addUserToAPI('admin','password')
// addUserToAPI('Thatsanee','password')
// addUserToAPI('Lisa','password')
// fetchUsers()

