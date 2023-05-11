import { SearchInput, Button, SearchDiv, DivSearchField, ParaFieldText } from "./StyledSearch"
import { useRef, useState } from "react"
import { useRecoilState } from "recoil"
import productList from "../../recoil/atom/products/products"
import { searchState } from "../../recoil/atom/searchState/searchState"
import { searchResults } from "../../recoil/atom/searchResults/searchResults"
import Filter from "../filter/Filter"
import { validateSearch } from "../../utils"

export default function Search() {
    const inputField = useRef(null)
    const [inputContent, setInputContent] = useState('')
    const [products, setProducts] = useRecoilState(productList)
    const [foundProducts, setFoundProducts] = useRecoilState(searchResults)
    const [isSearchDirty, setIsSearchDirty] = useRecoilState(searchState)
    const [errorMessage, setErrorMessage] = useState(false)

    function filterByString(input) {
        const searchString = input.toLowerCase()
        const regex = /^[0-9a-zA-Z\s]{1,}$/
        
        const searchIsValid = regex.test(searchString)
        
        searchIsValid &&
        (setFoundProducts(products.filter(product => product.name.toLowerCase().includes(searchString))),
        console.log('test #2'), 
        setIsSearchDirty(true)
        )

        searchString == '' && setFoundProducts(products)
    }

    function handleEnterKey(event) {
        filterByString(inputContent)
    }

    return (
        <>
            <SearchDiv>
                <DivSearchField>
                    {!errorMessage ? <ParaFieldText> Sök produkt </ParaFieldText> : <ParaFieldText> Vänligen ange endast bokstäver/siffror. </ParaFieldText> }
                    <SearchInput 
                        className="input"
                        ref={inputField}
                        type='text'
                        maxLength='20'
                        placeholder='Sök på din vara här..'
                        onChange={(event) => {
                            validateSearch(event.target.value, inputField, setErrorMessage, 'search')
                            setInputContent(event.target.value)
                        }}
                        onKeyUp={handleEnterKey}
                        onFocus={ () => SearchInput.placeholder = ""}
                    />
                </DivSearchField>

                    <Button onClick={() => filterByString((inputContent))}> 
                        Sök 
                    </Button>

                <Button onClick={() => setIsSearchDirty((false)) }> 
                    Visa alla produkter 
                </Button>

            </SearchDiv>
                <Filter/>
        </>
    )
}