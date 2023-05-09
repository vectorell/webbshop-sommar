import { atom } from "recoil"


const baseUrl = atom({
    key: 'baseUrl',
    default: 'https://www.forverkliga.se/JavaScript/api/fe/',
})



export default baseUrl