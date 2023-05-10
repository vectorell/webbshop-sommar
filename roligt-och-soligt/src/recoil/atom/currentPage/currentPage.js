import { atom } from "recoil";

export const currentPage = atom({
    key: 'currentPage',
    default: 'start',
})