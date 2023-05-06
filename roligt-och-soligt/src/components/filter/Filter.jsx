import { Button, FilterDiv } from "./StyledFilter"
import { useRecoilState } from "recoil"
import productList from "../../recoil/atom/products/products"
import { useState } from "react"
import { searchResults } from "../../recoil/atom/searchResults/searchResults"


function Filter() {

    const [products, setProducts] = useRecoilState(productList)
    const [filteredProducts, setFilteredProducts] = useRecoilState(searchResults)
    const [ascending, setAscending] = useState(false)


    function sortByAscendingPrice() {
        const sortedArray = [...products]
        const sorted = sortedArray.sort((productA, productB) => productA.price - productB.price )
        setProducts(sorted)
        setFilteredProducts(sorted)
    }
    
    function sortByDescendingPrice() {
        const sortedArray = [...products]
        const sorted = sortedArray.sort((productA, productB) => productB.price - productA.price )
        setProducts(sorted)
        setFilteredProducts(sorted)
    }

    function sortByAscendingName() {
        const newArray = [...products]
        const sortedArray = newArray.sort((productA, productB) => productA.name > productB.name)
        setProducts(sortedArray)
        setFilteredProducts(sortedArray)
    }

    function sortByDescendingName() {
        const newArray = [...products]
        const sortedArray = newArray.sort((productA, productB) => productA.name < productB.name)
        setProducts(sortedArray)
        setFilteredProducts(sortedArray)
    }


    return (
        <FilterDiv>
            <Button onClick={() => sortByAscendingPrice()}> Billigast överst </Button>
            <Button onClick={() => sortByDescendingPrice()}> Dyrast överst </Button>
            <Button onClick={() => sortByAscendingName()}> Namn, alfabetiskt </Button>
            <Button onClick={() => sortByDescendingName()}> Namn, omvänt </Button>
        </FilterDiv>


    )
}

export default Filter