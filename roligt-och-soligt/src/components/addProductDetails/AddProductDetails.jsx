import { useState, useRef } from "react"
import { useRecoilState } from "recoil"
import { useNavigate } from "react-router-dom"
import productList from "../../recoil/atom/products/products.jsx"
import defaultToysImage from '../../assets/product-images/default-toys.jpg'
import { uploadProduct } from "../../utils.js"
import { PageTitle, ProductDiv, ProductImage, ProductInfo, ButtonsDiv, ButtonLink} from "../../routes/productDetails/StyledProductDetails.jsx"
import {DivErrorMsg, ParaErrorMsg} from '../addProductDetails/StyledAddProductDetails.jsx'
import { DivInput } from "./StyledAddProductDetails.jsx"
import { validateSearch } from "../../utils.js"



export default function AddProductDetails() {

    const navigate = useNavigate()
    const [products, setProducts] = useRecoilState(productList)

    const [errorMessageTitle, setErrorMessageTitle] = useState(false)
    const [errorMessageDescription, setErrorMessageDescription] = useState(false)
    const [errorMessagePrice, setErrorMessagePrice] = useState(false)
    
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


        setErrorMessageTitle(false)
        setErrorMessageDescription(false)
        setErrorMessagePrice(false)
        
        const string = inputDescription.current.value
        const regexDescription = /^[\w\s"'-.,!?:]{2,50}$/i

        const nameIsValid = (inputTitle.current.value).match( '^[a-öA-Ö0-9]{2,30}$' )
        const descriptionIsValid = regexDescription.test( string )
        const priceIsValid = (inputPrice.current.value).match( '^[0-9]{1,12}$' )

        !nameIsValid ? setErrorMessageTitle(true) : setErrorMessageTitle(false)
        !descriptionIsValid ? setErrorMessageDescription(true) : setErrorMessageDescription(false)
        !priceIsValid ? setErrorMessagePrice(true) : setErrorMessagePrice(false)
        
        const product = {
            name: inputTitle.current.value,
            price: inputPrice.current.value,
            description: inputDescription.current.value,
            picture: defaultToysImage,
            shopId: 3001,
        }
        
        if (nameIsValid && descriptionIsValid && priceIsValid) {
            uploadProduct(product)
            navigate("/admin/products")
        }
        getAllProducts()
    }

    return (
        <>
            <PageTitle> Lägg till en ny produkt </PageTitle>
            <ProductDiv>           
                <ProductImage src={defaultToysImage} alt='default image'/>
                <ProductInfo>  
                    <DivInput>
                        <p> Namn </p>
                        
                        <input
                            className="input"
                            ref={inputTitle} 
                            type="text"
                            placeholder='Namn'
                            onChange={ (event) => { 
                                validateSearch(event.target.value, inputTitle, setErrorMessageTitle, 'text')
                                setTitle(inputTitle.current.value)
                            }}
                        />
                        <DivErrorMsg>
                            { errorMessageTitle && <ParaErrorMsg> Var god skriv in mellan 2 och 30 <strong> bokstäver </strong> och/eller <strong> siffror. </strong></ParaErrorMsg> }
                        </DivErrorMsg>
                    </DivInput>

                    <DivInput>
                        <p> Beskrivning </p> 

                        <input 
                            className="input"
                            ref={inputDescription} 
                            type="text"
                            placeholder='beskrivning'
                            onChange={ (event) => { 
                                validateSearch(event.target.value, inputDescription, setErrorMessageDescription, 'text')
                                setDescription(inputDescription.current.value)
                            } }
                        />

                        <DivErrorMsg>
                            { errorMessageDescription && <ParaErrorMsg> Var god skriv in mellan 2 och 30 <strong> bokstäver </strong> och/eller <strong> siffror. </strong></ParaErrorMsg> }
                        </DivErrorMsg>

                    </DivInput>
                                
                    <DivInput>
                        <p> Pris </p>
                        
                        <input 
                            className="input"
                            ref={inputPrice} 
                            placeholder='Pris'
                            onChange={ (event) => { 
                                validateSearch(event.target.value, inputPrice, setErrorMessagePrice, 'price')
                                setPrice(inputPrice.current.value)
                            }}
                        />
                        <DivErrorMsg>
                            { errorMessagePrice && <ParaErrorMsg> Var god skriv in endast <strong> siffror</strong>, max 15 st.</ParaErrorMsg> }
                        </DivErrorMsg>
                    </DivInput>
                
                </ProductInfo>


                        <ButtonsDiv>
                            
                            <ButtonLink onClick={() => {
                                applyChanges(title, description, price)
                                }}> Spara </ButtonLink>
                        </ButtonsDiv>

            </ProductDiv>
            <ButtonLink to="/admin/products"> Tillbaka </ButtonLink>
        </>
    )
    // return (
    //     <>
    //         <PageTitle> Lägg till produkt </PageTitle>
    //         <ProductDiv>

    //             <ProductImage src={ defaultToysImage } alt="standardbild"/>
    //             <ProductInfo>

    //                 <DivInput>
    //                     <p> Produktnamn </p>
    //                     <input
    //                         type='text'
    //                         ref={inputTitle} 
    //                         placeholder="Namn"
    //                         onChange={ (event) => { setTitle(event.target.value)}}
    //                     />
    //                     { nameErrorMsg ? <ErrorMessage> Vad god ange ett namn, mellan 2 och 30 bokstäver och/eller siffror. </ErrorMessage> : null}
    //                 </DivInput>

    //                 <DivInput>
    //                     <p> Beskrivning </p>
    //                     <input
    //                         type='text' 
    //                         ref={inputDescription} 
    //                         placeholder="Beskrivning"
    //                         onChange={ (event) => { setDescription(event.target.value)}}
    //                     />
    //                     { descriptionErrorMsg ? <ErrorMessage> Vad god ange en beskrivning, mellan 5 och 50 bokstäver och/eller siffror. </ErrorMessage> : null}
    //                 </DivInput>

    //                 <DivInput>
    //                     <p> Pris </p>
    //                     <input 
    //                         type='number'
    //                         min='0' max='999999999999'
    //                         ref={inputPrice} 
    //                         placeholder="Pris"
    //                         onChange={ (event) => { setPrice(event.target.value)}}
    //                     />
    //                     { errorMessagePrice ? <ErrorMessage> Vad god ange ett pris, endast siffror mellan 0 - 999 999 999 999. </ErrorMessage> : null}
    //                 </DivInput>     

    //                 <ButtonsDiv>
    //                     <ButtonLink onClick={() => applyChanges()}> Spara </ButtonLink>
    //                 </ButtonsDiv>

    //             </ProductInfo>
                
    //         </ProductDiv>
    //         <ButtonLink to="/admin/products"> Tillbaka </ButtonLink>
    //     </>
    // )
}