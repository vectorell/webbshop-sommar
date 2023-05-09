import { useEffect, useState, useRef } from "react"
import { useRecoilState } from "recoil"
import { useParams, useNavigate } from "react-router-dom"
import productList from "../../recoil/atom/products/products.jsx"
import isLoadingAPI from "../../recoil/atom/isLoadingAPI/isLoadingAPI.js"

import { PageTitle, ProductDiv, ProductImage, ProductInfo, ButtonsDiv, ButtonLink } from "../../routes/productDetails/StyledProductDetails.jsx"

function AdminProductDetails() {

    const navigate = useNavigate()
    const {id} = useParams()
    
    const [products, setProducts] = useRecoilState(productList)
    const [isLoading, setIsLoading] = useRecoilState(isLoadingAPI)
    
    const [edit, setEdit] = useState(false)
    const [product, setProduct] = useState(null)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    
    const inputTitle = useRef(null)
    const inputDescription = useRef(null)
    const inputPrice = useRef(null)
    
    const baseUrl = 'https://www.forverkliga.se/JavaScript/api/fe/'
    const shopId = 3001


    function findProduct(id) {
        return products.find(product => product.id == id)
    }

    useEffect(() => {
        setProduct(findProduct(id))
    },[id])


    async function getAllProducts() {
        try {
            let response = await fetch(baseUrl + '?action=get-products&shopid=' + shopId)
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            console.log('error !')
        }
        setIsLoading(false)
    }

    useEffect(() => {
        getAllProducts()
    }, [])


    async function applyChanges() {
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
    }
  
    
    async function eraseProduct() {
        const data = { shopid: shopId, productid: product.id }

        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }
        
        let response = await fetch((baseUrl + '?action=delete-product'), options) && getAllProducts()
        console.log(response)
        navigate("/admin/products")
    }


    return (
        <>
            <PageTitle> Produktdetaljer (admin) </PageTitle>
            <ProductDiv>
                {product && 
                    <>
                    <ProductImage src={ product.picture } alt={product.name}/>
                    <ProductInfo>
                        { !edit && <>
                            <h1> {product.name} </h1>
                            <p> { product.description } </p>
                            <p> { product.price }:- </p>
                        </>}

                        { edit && <>
                            <input
                                ref={inputTitle} 
                                placeholder={product.name}
                                onChange={ (event) => { setTitle(event.target.value)}}
                                />

                            <input 
                                ref={inputDescription} 
                                placeholder={product.description}
                                onChange={ (event) => { setDescription(event.target.value)}}
                                />
                            
                            <input 
                                ref={inputPrice} 
                                placeholder={product.price}
                                onChange={ (event) => { setPrice(event.target.value)}}
                            />

                        </>}


                        <ButtonsDiv>
                            {!edit && <ButtonLink onClick={() => setEdit(!edit)}> Redigera </ButtonLink>}
                            {edit && <ButtonLink onClick={() => {
                                setEdit(!edit)
                                applyChanges()
                                }}> Spara </ButtonLink>}
                            
                            <ButtonLink onClick={eraseProduct}> Ta bort produkt </ButtonLink>
                        </ButtonsDiv>
                    </ProductInfo>
                    </>
                }
            </ProductDiv>
            <ButtonLink to="/admin/products"> Tillbaka </ButtonLink>
        </>
    )
}

export default AdminProductDetails