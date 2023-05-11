import { useEffect, useState, useRef } from "react"
import { useRecoilState } from "recoil"
import { useParams, useNavigate } from "react-router-dom"
import productList from "../../recoil/atom/products/products.jsx"
import isLoadingAPI from "../../recoil/atom/isLoadingAPI/isLoadingAPI.js"
import { validateSearch } from "../../utils.js"

import { PageTitle, ProductDiv, ProductImage, ProductInfo, ButtonsDiv, ButtonLink, DivInput, ParaErrorMsg, DivErrorMsg } from "../../routes/adminProductDetails/StyledAdminProductDetails.jsx"
import loadingSpinner from "../../recoil/atom/loadingSpinner/loadingSpinner.js"

export default function AdminProductDetails() {

    const navigate = useNavigate()
    const {id} = useParams()
    
    const [products, setProducts] = useRecoilState(productList)
    const [isLoading, setIsLoading] = useRecoilState(isLoadingAPI)
    const [spinnerLoading, setSpinnerLoading] = useRecoilState(loadingSpinner)
    
    const [edit, setEdit] = useState(false)
    const [product, setProduct] = useState(null)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    
    const inputTitle = useRef(null)
    const [errorMessageTitle, setErrorMessageTitle] = useState(false)
    const [errorMessageDescription, setErrorMessageDescription] = useState(false)
    const [errorMessagePrice, setErrorMessagePrice] = useState(false)
    const inputDescription = useRef(null)
    const inputPrice = useRef(null)
    
    const baseUrl = 'https://www.forverkliga.se/JavaScript/api/fe/'
    const shopId = 3001


    function findProduct(id) { return products.find(product => product.id == id) }

    useEffect(() => { setProduct( findProduct(id)) }, [id] )

    async function getAllProducts() {
        setSpinnerLoading(true)
        try {
            let response = await fetch(baseUrl + '?action=get-products&shopid=' + shopId)
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            console.log('error !')
        } finally {
            setSpinnerLoading(false)
            setIsLoading(false)
        }
    }

    useEffect( () => { getAllProducts() }, [] )

    async function applyChanges(title, description, price) {
        const regexName = /^[-"()=:.,!?0-9a-öA-Ö\s]{2,150}$/
        const regexDescription = /^[-"()=:.,!?0-9a-öA-Ö\s]{5,150}$/
        const regexPrice = /^[0-9]{1,15}$/

        title === '' && (title = product.name)
        description === '' && (description = product.description)
        price === '' && (price = product.price)

        let nameIsValid = regexName.test(title)
        let descriptionIsValid = regexDescription.test(description)
        let priceIsValid = regexPrice.test(price)

        if (nameIsValid && descriptionIsValid && priceIsValid) {
            setSpinnerLoading(true)
            try {
                const data = {
                    name: inputTitle.current.value !== '' ? title : product.name,
                    price: inputPrice.current.value !== '' ? Number(price) : Number(product.price),
                    description: inputDescription.current.value !== '' ? description : product.description,
                    picture: product.picture,
                    shopid: 3001,
                    productid: product.id,
                }
                
                const options = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                }
                
                let response = await fetch((baseUrl + '?action=edit-product'), options)
                console.log(response)
                
                getAllProducts()
                navigate("/admin/products")
                
            } catch (error) {
            } finally {
                setSpinnerLoading(false)
            }
        }
    }
  
    async function eraseProduct() {
        setSpinnerLoading(true)
        try {
            const data = { shopid: shopId, productid: product.id }
    
            const options = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            }
            
            let response = await fetch((baseUrl + '?action=delete-product'), options)
            console.log(response)
        } catch (error) {
        } finally {
            setSpinnerLoading(false)
            navigate("/admin/products")
        }
        getAllProducts()
    }

    return (
        <>
            <PageTitle> Produktdetaljer (admin) </PageTitle>
            <ProductDiv>
                {product && 
                <>
                <ProductImage src={ product.picture } alt={product.name}/>
                <ProductInfo>
                    { !edit ?
                     <>
                        <h1> {product.name} </h1>
                        <p> { product.description } </p>
                        <p> { product.price }:- </p>
                    </>
                    :
                    <>
                    <DivInput>
                        <p> Namn </p>
                        <input
                            className="input"
                            ref={inputTitle} 
                            type="text"
                            placeholder={product.name}
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
                            placeholder={product.description}
                            onChange={ (event) => { 
                                validateSearch(event.target.value, inputDescription, setErrorMessageDescription, 'text')
                                setDescription(inputDescription.current.value)
                            } }
                        />
                        <DivErrorMsg>
                            { errorMessageDescription && <ParaErrorMsg> Var god skriv in mellan 5 och 30 <strong> bokstäver </strong> och/eller <strong> siffror. </strong></ParaErrorMsg> }
                        </DivErrorMsg>
                    </DivInput>
                                
                    <DivInput>
                        <p> Pris </p>
                        <input 
                            className="input"
                            ref={inputPrice} 
                            placeholder={product.price}
                            onChange={ (event) => { 
                                validateSearch(event.target.value, inputPrice, setErrorMessagePrice, 'price')
                                setPrice(inputPrice.current.value)
                            }}
                        />
                        <DivErrorMsg>
                            { errorMessagePrice && <ParaErrorMsg> Var god skriv in endast <strong> siffror</strong>.</ParaErrorMsg> }
                        </DivErrorMsg>

                    </DivInput>
                </>}
                </ProductInfo>


                        <ButtonsDiv>
                            {!edit && <ButtonLink onClick={() => setEdit(!edit)}> Redigera </ButtonLink>}
                            {edit && <ButtonLink onClick={() => {
                                setEdit(!edit)
                                applyChanges(title, description, price)
                                }}> Spara </ButtonLink>}
                            <ButtonLink onClick={eraseProduct}> Ta bort produkt </ButtonLink>
                        </ButtonsDiv>
                    </>
                }
            </ProductDiv>
            <ButtonLink to="/admin/products"> Tillbaka </ButtonLink>
        </>
    )
}