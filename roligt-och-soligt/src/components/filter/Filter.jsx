import { Button, FilterDiv } from "./StyledFilter"
import { useRecoilState } from "recoil"
import productList from "../../recoil/atom/products/products"
import { searchResults } from "../../recoil/atom/searchResults/searchResults"

export default function Filter() {

    const [products, setProducts] = useRecoilState(productList)
    const [filteredProducts, setFilteredProducts] = useRecoilState(searchResults)


    function sortByAscendingPrice() {
        const sortedArray = [...products].sort((a, b) => a.price - b.price )
        setProducts(sortedArray)
        setFilteredProducts(sortedArray)
    }
    
    function sortByDescendingPrice() {
        const sortedArray = [...products].sort((a, b) => b.price - a.price )
        setProducts(sortedArray)
        setFilteredProducts(sortedArray)
    }

    function sortByAscendingName() {
        const sortedArray = [...products].sort((a, b) => a.name > b.name)
        setProducts(sortedArray)
        setFilteredProducts(sortedArray)
    }

    function sortByDescendingName() {
        const sortedArray = [...products].sort((a, b) => a.name < b.name)
        setProducts(sortedArray)
        setFilteredProducts(sortedArray)
    }

    return (
        <FilterDiv>
            <Button onClick={ sortByAscendingPrice }> Billigast överst </Button>
            <Button onClick={ sortByDescendingPrice }> Dyrast överst </Button>
            <Button onClick={ sortByAscendingName }> Namn, alfabetiskt </Button>
            <Button onClick={ sortByDescendingName }> Namn, omvänt </Button>
        </FilterDiv>
    )
}