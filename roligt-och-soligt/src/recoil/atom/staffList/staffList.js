import StaffPer from "../../../assets/staff/per.jpeg"
import StaffLisa from "../../../assets/staff/lisa.jpeg"
import StaffThatsanee from "../../../assets/staff/thatsanee.jpeg"
import { atom } from "recoil"


const staffList = atom({
    key: 'staffList',
    default: [
        {
            name: 'Per',
            image: StaffPer,
            id: 1,
            passw: '',
        },
        {
            name: 'Thatsanee',
            image: StaffThatsanee,
            id: 2,
            passw: '',
        },
        {
            name: 'Lisa',
            image: StaffLisa,
            id: 3,
            passw: '',
        },
    ]
})

export default staffList