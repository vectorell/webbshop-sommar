import noPhoto from "../src/assets/no-photo.jpg"

export function addNewUser(inputContent, staff, setStaff, setInputContent) {

    console.log(inputContent)
    let user = {
        name: inputContent,
        image: noPhoto,
        id: (staff.length + 1),
        passw: '',
    }

    let newStaffList = [...staff, user]
    setStaff(newStaffList)
    console.log(staff)
    setInputContent('')
}

export function deleteUser() {
    console.log('delete')
}