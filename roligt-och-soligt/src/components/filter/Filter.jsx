import { Button, FilterDiv } from "./StyledFilter"
import { useRecoilState } from "recoil"
import productList from "../../recoil/atom/products/products"
import { searchResults } from "../../recoil/atom/searchResults/searchResults"
import { sortByAscendingName, sortByDescendingName, sortByAscendingPrice, sortByDescendingPrice } from "../../utils"

export default function Filter() {

    const [products, setProducts] = useRecoilState(productList)
    const [filteredProducts, setFilteredProducts] = useRecoilState(searchResults)

    return (
        <FilterDiv>
            <Button onClick={() => sortByAscendingPrice(products, setProducts, filteredProducts, setFilteredProducts) }> Billigast överst </Button>
            <Button onClick={() =>  sortByDescendingPrice(products, setProducts, filteredProducts, setFilteredProducts) }> Dyrast överst </Button>
            <Button onClick={() =>  sortByAscendingName(products, setProducts, filteredProducts, setFilteredProducts) }> Namn, A-Ö </Button>
            <Button onClick={() =>  sortByDescendingName(products, setProducts, filteredProducts, setFilteredProducts) }> Namn, Ö-A </Button>
        </FilterDiv>
    )
}