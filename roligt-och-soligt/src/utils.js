import noPhoto from "./assets/staff/no-photo.jpg"

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



/** VALIDERING ANVÄNDARNAMN ******/
export function validateName(input, errorMessage) {
    const userString = input.current.value
    const regex = /^[a-zA-Z\s]{2,}$/

    userString === '' ? (input.current.classList.add('input'), errorMessage((false)), input.current.classList.remove('invalid'))

    : regex.test(userString) ? (input.current.classList.add('valid'), input.current.classList.remove('invalid'), errorMessage((false)))

    : (input.current.classList.remove('valid'), input.current.classList.add('invalid'), errorMessage((true)))
}