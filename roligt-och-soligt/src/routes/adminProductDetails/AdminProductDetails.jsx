import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { useParams } from "react-router-dom"
import productList from "../../recoil/atom/products/products.js"
import { useRef } from "react"

/** Imports for styled components **/
import { PageTitle } from "../../routes/productDetails/StyledProductDetails.jsx"
import { ProductDiv } from "../../routes/productDetails/StyledProductDetails.jsx"
import { ProductImage } from "../../routes/productDetails/StyledProductDetails.jsx"
import { ProductInfo } from "../../routes/productDetails/StyledProductDetails.jsx"
import { ButtonsDiv } from "../../routes/productDetails/StyledProductDetails.jsx"
import { ButtonLink } from "../../routes/productDetails/StyledProductDetails.jsx"

function AdminProductDetails() {


    
    const {id} = useParams()
    const [product, setProduct] = useState(null)
    const [products, setProducts] = useRecoilState(productList)
    const [edit, setEdit] = useState(false)
    const [update, setUpdate] = useState(false)
    
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    
    const inputTitle = useRef(null)
    const inputDescription = useRef(null)
    const inputPrice = useRef(null)
    const displayedTitle = useRef(null)
    const displayedDescription = useRef(null)
    const displayedPrice = useRef(null)
    
    
    
    function findProduct(id) {
        return products.find(product => product.productId == id)
    }

    useEffect(() => {
        setProduct(findProduct(id))
    },[id])


    function applyChanges() {
        // Plocka ur listan
        let newArray = [...products]
    
        // Hitta produkt i newArray
        let foundProduct = newArray.find(obj => obj.productId === product.productId)
    
        let updatedProduct = {
            ...foundProduct,
            name: inputTitle.current.value !== '' ? title : foundProduct.name,
            description: inputDescription.current.value !== '' ? description : foundProduct.description,
            price: inputPrice.current.value !== '' ? Number(price) : Number(foundProduct.price)
        }
    
        let index = newArray.findIndex(obj => obj.productId === product.productId)
        newArray[index] = updatedProduct
    
        // Sätt tillbaka listan
        setProducts(newArray)
    }

    function eraseProduct() {
        const newArray = [...products]
        const filteredArray = newArray.filter(obj => obj !== product)
        setProducts(filteredArray)
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
                            <h1 ref={displayedTitle}> {product.name} </h1>
                            <p ref={displayedDescription}> { product.description } </p>
                            <p ref={displayedPrice}> { product.price }:- </p>
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