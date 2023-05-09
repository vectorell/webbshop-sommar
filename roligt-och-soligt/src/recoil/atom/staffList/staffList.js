import StaffPer from "../../../assets/staff/per.jpeg"
import StaffLisa from "../../../assets/staff/lisa.jpeg"
import StaffThatsanee from "../../../assets/staff/thatsanee.jpeg"
import { atom } from "recoil"


const staffList = atom({
    key: 'staffList',
    default: []
})

export default staffList