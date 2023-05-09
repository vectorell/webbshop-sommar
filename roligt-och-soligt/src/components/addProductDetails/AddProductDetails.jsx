import { useState, useRef } from "react"
import { useRecoilState } from "recoil"
import { useNavigate } from "react-router-dom"
import productList from "../../recoil/atom/products/products.jsx"
import defaultToysImage from '../../assets/product-images/default-toys.jpg'
import { uploadProduct } from "../../utils.js"
import { PageTitle, ProductDiv, ProductImage, ProductInfo, ButtonsDiv, ButtonLink } from "../../routes/productDetails/StyledProductDetails.jsx"
import { ErrorMessage, DivInput } from "./StyledAddProductDetails.jsx"

export default function AddProductDetails() {

    const navigate = useNavigate()
    const [products, setProducts] = useRecoilState(productList)

    const [nameErrorMsg, setNameErrorMsg] = useState(false)
    const [descriptionErrorMsg, setDescriptionErrorMsg] = useState(false)
    const [priceErrorMsg, setPriceErrorMsg] = useState(false)
    
    const inputTitle = useRef(null)
    const inputDescription = useRef(null)
    const inputPrice = useRef(null)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(null)

    const baseUrl = 'https://www.forverkliga.se/JavaScript/api/fe/'
    const shopId = 3001

    async function getAllProducts() {
        try {
            let response = await fetch(baseUrl + '?action=get-products&shopid=' + shopId)
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            console.log('error !')
        }
    }
    
    function applyChanges() {
        setNameErrorMsg(false)
        setDescriptionErrorMsg(false)
        setPriceErrorMsg(false)
        
        const string = inputDescription.current.value
        const regexDescription = /^[\w\s"'-.,!?:]{5,50}$/i

        const nameIsValid = (inputTitle.current.value).match( '^[a-öA-Ö0-9]{2,30}$' )
        const descriptionIsValid = regexDescription.test( string )
        const priceIsValid = (inputPrice.current.value).match( '^[0-9]{1,12}$' )

        !nameIsValid ? setNameErrorMsg(true) : setNameErrorMsg(false)
        !descriptionIsValid ? setDescriptionErrorMsg(true) : setDescriptionErrorMsg(false)
        !priceIsValid ? setPriceErrorMsg(true) : setPriceErrorMsg(false)
        
        const product = {
            name: inputTitle.current.value,
            price: inputPrice.current.value,
            description: inputDescription.current.value,
            picture: defaultToysImage,
            shopId: 3001,
        }
        
        if (nameIsValid && descriptionIsValid && priceIsValid) {
            uploadProduct(product)
            getAllProducts()
            navigate("/admin/products")
        }
    }

    
    return (
        <>
            <PageTitle> Lägg till produkt </PageTitle>
            <ProductDiv>

                <ProductImage src={ defaultToysImage } alt="standardbild"/>
                <ProductInfo>

                    <DivInput>
                        <p> Produktnamn </p>
                        <input
                            type='text'
                            ref={inputTitle} 
                            placeholder="Namn"
                            onChange={ (event) => { setTitle(event.target.value)}}
                        />
                        { nameErrorMsg ? <ErrorMessage> Vad god ange ett namn, mellan 2 och 30 bokstäver och/eller siffror. </ErrorMessage> : null}
                    </DivInput>

                    <DivInput>
                        <p> Beskrivning </p>
                        <input
                            type='text' 
                            ref={inputDescription} 
                            placeholder="Beskrivning"
                            onChange={ (event) => { setDescription(event.target.value)}}
                        />
                        { descriptionErrorMsg ? <ErrorMessage> Vad god ange en beskrivning, mellan 5 och 50 bokstäver och/eller siffror. </ErrorMessage> : null}
                    </DivInput>

                    <DivInput>
                        <p> Pris </p>
                        <input 
                            type='number'
                            min='0' max='999999999999'
                            ref={inputPrice} 
                            placeholder="Pris"
                            onChange={ (event) => { setPrice(event.target.value)}}
                        />
                        { priceErrorMsg ? <ErrorMessage> Vad god ange ett pris, endast siffror mellan 0 - 999 999 999 999. </ErrorMessage> : null}
                    </DivInput>     

                    <ButtonsDiv>
                        <ButtonLink onClick={() => applyChanges()}> Spara </ButtonLink>
                    </ButtonsDiv>

                </ProductInfo>
                
            </ProductDiv>
            <ButtonLink to="/admin/products"> Tillbaka </ButtonLink>
        </>
    )
}