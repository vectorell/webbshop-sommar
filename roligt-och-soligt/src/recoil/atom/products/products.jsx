import { useEffect } from "react"

import { atom, useRecoilState } from "recoil"
import isLoadingAPI from "../isLoadingAPI/isLoadingAPI"
// import { getAllProducts } from "../../../utils"



const productList = atom({
    key: 'productList',
    default: []
})


export default productList