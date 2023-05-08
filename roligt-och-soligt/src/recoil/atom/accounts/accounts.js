import { atom } from "recoil";

export const accounts = atom({
    key: 'accounts',
    default: [
        { username: 'admin', password: 'password'},
        { username: 'Per', password: 'password'},
        { username: 'Thatsanee', password: 'password'},
        { username: 'Lisa', password: 'password'},
    ]
})