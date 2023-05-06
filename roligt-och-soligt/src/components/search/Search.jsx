import { SearchInput } from "./StyledSearch"
import { useRef, useState } from "react"
import { useRecoilState } from "recoil"
import productList from "../../recoil/atom/products/products"
import { searchState } from "../../recoil/atom/searchState/searchState"
import { searchResults } from "../../recoil/atom/searchResults/searchResults"
import { SearchDiv } from "./StyledSearch"
import { Button } from "./StyledSearch"
import Filter from "../filter/Filter"

function Search() {
    const inputField = useRef(null)
    const [inputContent, setInputContent] = useState('')
    const [products, setProducts] = useRecoilState(productList)
    const [foundProducts, setFoundProducts] = useRecoilState(searchResults)
    const [isSearchDirty, setIsSearchDirty] = useRecoilState(searchState)



    function filterByString(input) {
        const searchString = input.toLowerCase()
        setIsSearchDirty((true))
        
        setFoundProducts(products.filter(product => product.name.toLowerCase().includes(searchString)))
    }    


    return (
        <SearchDiv>

            <p> Sök </p>
            <SearchInput 
                ref={inputField}
                type='text'
                placeholder='Sök på din vara här..'
                onChange={(event) => setInputContent(event.target.value)}
                />

            <Button onClick={() => filterByString((inputContent))}> 
                Sök 
            </Button>

            <Button onClick={() => setIsSearchDirty((false)) }> 
                Visa alla produkter 
            </Button>

            <Filter/>

        </SearchDiv>
    )
}

export default Search