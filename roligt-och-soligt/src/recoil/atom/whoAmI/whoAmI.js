import { atom } from "recoil";

export const whoAmI = atom({
    key: 'whoAmI',
    default: { username: 'sudo'}
})