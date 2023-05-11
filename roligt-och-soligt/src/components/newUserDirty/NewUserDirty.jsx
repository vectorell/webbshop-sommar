import { UserDiv, EditIcon, Message } from "../../routes/login/StyledAdmin";
import addIcon from "../../assets/add-button.png";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { newUserState } from "../../recoil/atom/newUser/newUserState";
import iconChecked from "../../assets/checked.png";
import staffList from "../../recoil/atom/staffList/staffList";
import { validateName, validatePassword } from "../../utils";
import { InputForm, ErrorMessage } from "./StyledNewUserDirty";
import arrowBack from "../../assets/arrow-back.png";
import loadingSpinner from '../../assets/loading-spinner.gif'

export default function NewUserDirty() {
    const [isNewUserClean, setIsNewUserClean] = useRecoilState(newUserState);

    const [inputContentName, setInputContentName] = useState(null);
    const [inputContentPassword, setInputContentPassword] = useState(null);
    const [isAPILoading, setIsAPILoading] = useState(false)

    const inputFieldName = useRef(null);
    const inputFieldPassword = useRef(null);
    const [staff, setStaff] = useRecoilState(staffList);
    const [userNameErrorMessage, setUserNameErrorMessage] = useState(false);
    const [userPasswordErrorMessage, setUserPasswordErrorMessage] = useState(false);
    const loaderRef = useRef(null)
    const baseUrl = "https://www.forverkliga.se/JavaScript/api/fe/"

    async function addNewUser(name, password) {

        const usernameIsValid = /^[a-zA-Z\s]{2,}$/.test(name)
        const passwordIsValid = /^.{8,30}$/.test(password)

        inputFieldName && userNameErrorMessage

        if (usernameIsValid && passwordIsValid) {
            setIsAPILoading(true)
            loaderRef.current.style.display = 'block';

            try {
                const data = {
                    shopid: 3001,
                    username: name,
                    password: password,
                }
        
                const options = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                }
        
                let response = await fetch(baseUrl + "?action=add-user", options)
                console.log(response)
                setStaff((prevStaff) => [...prevStaff, data])
                
            } catch (error) {
                console.log('error')
            } finally {
                loaderRef.current.style.display = 'none';
                setIsAPILoading(false)
            }
        }
    }

    return (
        <UserDiv>
            {<img ref={loaderRef} src={loadingSpinner} style={{ display: 'none' }} />}
            {!isAPILoading && <>
            <InputForm
                ref={inputFieldName}
                className="input"
                type="text"
                placeholder="Användarnamn"
                onChange={() => {
                    setInputContentName(inputFieldName.current.value)
                    validateName(inputFieldName, setUserNameErrorMessage)
                }}
            />

            {userNameErrorMessage ? 
                <ErrorMessage> Ange minst 2 bokstäver.</ErrorMessage>
                : <Message> Ange namn </Message>
            }

            <InputForm
                ref={inputFieldPassword}
                type="password"
                placeholder="Lösenord"
                onChange={() => {
                    setInputContentPassword(inputFieldPassword.current.value)
                    validatePassword(
                        inputFieldPassword,
                        setUserPasswordErrorMessage
                    )
                }}
            />

            {userPasswordErrorMessage ? 
                <ErrorMessage> Ange minst 8 tecken. </ErrorMessage> 
                : <Message> Ange lösenord </Message>
            }

        
            {isNewUserClean ? 
                <EditIcon src={addIcon}
                    onClick={() => setIsNewUserClean(!isNewUserClean)}/>
                :
                <EditIcon src={arrowBack}
                    onClick={() => setIsNewUserClean(!isNewUserClean)}/>
            }
                
                <EditIcon
                    src={iconChecked}
                    onClick={() => {

                        inputFieldName.current.classList.contains("valid") ?
                        setUserNameErrorMessage(false)
                        : (setUserNameErrorMessage(true), 
                            inputFieldName.current.classList.remove('valid'),
                            inputFieldName.current.classList.add('invalid')
                            )

                        inputFieldPassword.current.classList.contains("valid") ? setUserPasswordErrorMessage(false)
                        : (setUserPasswordErrorMessage(true), 
                            inputFieldPassword.current.classList.remove('valid'),
                            inputFieldPassword.current.classList.add('invalid')
                            )

                        inputFieldName.current.classList.contains('valid') && inputFieldPassword.current.classList.contains('valid') && 
                            addNewUser(inputContentName, inputContentPassword)
                        }                             
                    }
                />
            </>}
        </UserDiv>
    )
}