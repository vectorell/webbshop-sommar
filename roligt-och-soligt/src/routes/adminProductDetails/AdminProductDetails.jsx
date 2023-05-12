import { useEffect, useState, useRef } from "react"
import { useRecoilState } from "recoil"
import { useParams, useNavigate } from "react-router-dom"
import productList from "../../recoil/atom/products/products.jsx"
import isLoadingAPI from "../../recoil/atom/isLoadingAPI/isLoadingAPI.js"
import { validateSearch } from "../../utils.js"
import { postProductChanges } from "../../recoil/atom/API/apiFunctions.js"
import { getAllProducts } from "../../recoil/atom/API/apiFunctions.js"
import { postEraseProduct } from "../../recoil/atom/API/apiFunctions.js"
import { validateProductChanges } from "../../recoil/atom/API/apiFunctions.js"

import { PageTitle, ProductDiv, ProductImage, ProductInfo, ButtonsDiv, ButtonLink, DivInput, ParaErrorMsg, DivErrorMsg, PageDiv, InputField, ParaProductDescription, ParaProductPrice, ParaProductName } from "../../routes/adminProductDetails/StyledAdminProductDetails.jsx"
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

    function findProduct(id) { return products.find(product => product.id == id) }

    useEffect(() => { setProduct( findProduct(id)) }, [id] )
    useEffect( () => { getAllProducts() }, [] )

    async function applyChanges(title, description, price) {
        if ( validateProductChanges(title, description, price, product) ) {
            setSpinnerLoading(true)
            try {
                await postProductChanges( product, inputTitle, inputPrice, inputDescription)
                setProducts(await getAllProducts())

            } catch (error) {
            
            } finally {navigate("/admin/products"), setSpinnerLoading(false)}
        }
    }
    
    async function eraseProduct(product) {
        setSpinnerLoading(true)
        try {await postEraseProduct(product), setProducts(await getAllProducts())} 
        catch (error) {} 
        finally { setSpinnerLoading(false), navigate("/admin/products")}
    }

    return (
        <PageDiv>
            <PageTitle> Produktdetaljer (admin) </PageTitle>
            <ProductDiv>
                {product && 
                <>
                <ProductImage src={ product.picture } alt={product.name}/>
                <ProductInfo>
                    { !edit ?
                     <>
                        <ParaProductName> {product.name} </ParaProductName>
                        <ParaProductDescription> { product.description } </ParaProductDescription>
                        <ParaProductPrice> { product.price }:- </ParaProductPrice>
                    </>
                    :
                    <>
                    <DivInput>
                        <p> Namn </p>
                        <InputField
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
                        <InputField 
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
                        <InputField 
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
                            <ButtonLink onClick={() => eraseProduct(product)}> Ta bort produkt </ButtonLink>
                        </ButtonsDiv>
                    </>
                }
            </ProductDiv>
            <ButtonsDiv>
                <ButtonLink to="/admin/products"> Tillbaka </ButtonLink>

            </ButtonsDiv>
        </PageDiv>
    )
}