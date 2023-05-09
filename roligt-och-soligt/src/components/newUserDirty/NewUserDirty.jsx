import { UserDiv, EditIcon, Message } from "../../routes/login/StyledAdmin"
import addIcon from "../../assets/add-button.png"
import { useRef, useState } from "react"
import { useRecoilState } from "recoil"
import { newUserState } from "../../recoil/atom/newUser/newUserState"
import iconChecked from '../../assets/checked.png'
import staffList from "../../recoil/atom/staffList/staffList"
import { validateName } from "../../utils"
import { InputForm, ErrorMessage } from "./StyledNewUserDirty"


export default function NewUserDirty() {
    const [isNewUserClean, setIsNewUserClean] = useRecoilState(newUserState)
    
    const [inputContentName, setInputContentName] = useState(null)
    const [inputContentPassword, setInputContentPassword] = useState(null)

    const inputFieldName = useRef(null)
    const inputFieldPassword = useRef(null)
    const [staff, setStaff] = useRecoilState(staffList);
    const [userNameErrorMessage, setUserNameErrorMessage] = useState((false))
    const [userPasswordErrorMessage, setUserPasswordErrorMessage] = useState((false))
    const baseUrl = 'https://www.forverkliga.se/JavaScript/api/fe/'

    async function addNewUser(name, password) {
    
        const data = {
            shopid: 3001,
            username: name,
            password: password
        }
    
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }
    
        let response = await fetch((baseUrl + '?action=add-user'), options)
        console.log(response)
        setStaff(prevStaff => [...prevStaff, data])
    }

    return (
        <UserDiv>
            <InputForm 
                ref={inputFieldName} 
                className="input"
                type='text'
                placeholder="Användarnamn"
                onChange={() => {
                    setInputContentName(inputFieldName.current.value)
                    validateName(inputFieldName, setUserNameErrorMessage)
                }}
                />

                {userNameErrorMessage ? <ErrorMessage> Ange minst 2 bokstäver.</ErrorMessage> : <Message> Ange namn </Message>}

            <InputForm 
                ref={inputFieldPassword} 
                className="input"
                type='password'
                placeholder="Lösenord"
                onChange={() => {
                    setInputContentPassword(inputFieldPassword.current.value)
                    validateName(inputFieldPassword, setUserPasswordErrorMessage)
                }}
                />

                {userPasswordErrorMessage ? <ErrorMessage> Ange minst 2 bokstäver.</ErrorMessage> : <Message> Ange lösenord </Message>}

                {(inputContentName === null) && (inputContentPassword === null) ? 
                    <EditIcon src={addIcon} onClick={() => setIsNewUserClean(!isNewUserClean)}/> 
                    
                    : <EditIcon src={iconChecked} onClick={() => (
                        inputContentName === null) && (inputContentPassword === null) ? setIsNewUserClean(!isNewUserClean) 
                    : 

                    (inputFieldName.current.classList.contains('valid')) &&
                    (inputFieldPassword.current.classList.contains('valid'))
                    ? (addNewUser(inputContentName, inputContentPassword), setIsNewUserClean(!isNewUserClean)) : null
                    } /> 
                }
        </UserDiv>
    )
}