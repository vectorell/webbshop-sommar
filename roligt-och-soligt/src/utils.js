import noPhoto from "../src/assets/no-photo.jpg"

export function addNewUser(inputContent, staff, setStaff, setInputContent) {
    let user = {
        name: inputContent,
        image: noPhoto,
        id: (staff.length + 1),
        passw: '',
    }

    let newStaffList = [...staff, user]
    setStaff(newStaffList)
    setInputContent('')
}

export function deleteUser(id, staff, setStaff) {
    const filtered = staff.filter(user => user.id !== id)
    setStaff(filtered)
}