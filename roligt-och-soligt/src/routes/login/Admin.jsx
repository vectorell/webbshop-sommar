import { loginState } from "../../recoil/atom/loginState/loginState"
import { useRecoilState } from "recoil"
import { useEffect, useRef, useState } from "react"
import staffList from "../../recoil/atom/staffList/staffList"
import { addNewUser } from "../../utils"
import NewUserClean from "./newUserClean/NewUserClean"
import NewUserDirty from "./newUserDirty/NewUserDirty"
import Users from "./users/Users"
import { newUserState } from "../../recoil/atom/newUser/newUserState"



/** Styled Components */
import { InputDiv, PageTitle } from "./StyledAdmin"
import { Form } from "./StyledAdmin"
import { InputField } from "./StyledAdmin"
import { ContentDiv } from "./StyledAdmin"
import { UserDiv } from "./StyledAdmin"
import { UserImageDiv } from "./StyledAdmin"
import { UserImage } from "./StyledAdmin"
import { UserName } from "./StyledAdmin"
import { EditIcon } from "./StyledAdmin"
import { ErrorMessageUser } from "./StyledAdmin"
import { LoginButton } from "./StyledAdmin"
import noPhoto from "../../assets/no-photo.jpg"
import addIcon from "../../assets/add-button.png"

import editIcon from "../../assets/edit-icon2.png"



function Admin() {
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState)
    const [loginError, setLoginError] = useState(false)
    const userNameInput = useRef(null)
    const [userNameErrorMessage, setUserNameErrorMessage] = useState((false))
    const userPasswordInput = useRef(null)
    const [userPasswordErrorMessage, setUserPasswordErrorMessage] = useState((false))
    const [isNewUserClean, setIsNewUserClean] = useRecoilState(newUserState)

    /** ADMIN-KONTO ******/
    const adminAccount = { username: 'admin', password: 'password'}


    /** ANVÄNDARNAMN ******/
    function validateName() {
        const userString = userNameInput.current.value
        const regex = /^[a-zA-Z\s]{2,}$/

        userString === '' ? (userNameInput.current.className = 'input', setUserNameErrorMessage((false)))
        : regex.test(userString) ? (userNameInput.current.className = 'input valid', setUserNameErrorMessage((false)))
        : (userNameInput.current.className = 'input invalid', setUserNameErrorMessage((true)))
    }



    /** LÖSENORD ******/
    function validatePassword() {
        const userString = userPasswordInput.current.value
        const regex = /^.{8,30}$/

        userString === '' ? (userPasswordInput.current.className = 'input', setUserPasswordErrorMessage((false)))
        : regex.test(userString) ? (userPasswordInput.current.className = 'input valid', setUserPasswordErrorMessage((false)))
        : (userPasswordInput.current.className = 'input invalid', setUserPasswordErrorMessage((true)))
    }


    /** LOGIN-KNAPP ******/
    function validateLogin(event) {
        event.preventDefault()
        setLoginError((false))
        
        userNameInput.current.value === 'admin' && userPasswordInput.current.value === 'password' ? setIsLoggedIn(true)
        : setIsLoggedIn(false), setLoginError(true)
    }


    return (
        <>
            <PageTitle> Admin <button onClick={() => setIsLoggedIn(!isLoggedIn) }> {isLoggedIn ? 'Logga ut' : 'Logga in'} </button> </PageTitle>

            

            {/* OM INLOGGAD */}
            {isLoggedIn && (
                <>
                    <p> Användare </p>
                    <ContentDiv>  
                        <Users />

                        { isNewUserClean ? <NewUserClean/> : <NewUserDirty/> }
                    </ContentDiv>
                    
                    <LoginButton onClick={() => {setLoginError(false), setIsLoggedIn(false)}} > Logga ut </LoginButton>
                </>
            )}
            
            
            
            { !isLoggedIn &&
            // OM UTLOGGAD
            
            (<>
                <Form>
                    <InputDiv>
                        <p> Användarnamn </p>
                        
                        <InputField 
                            className = 'input'
                            type = 'text'
                            ref={userNameInput}
                            onChange={() => validateName()}
                        />
                        {userNameErrorMessage && <ErrorMessageUser> Var god ange ditt användarnamn med enbart bokstäver, minst två stycken. </ErrorMessageUser>}
                    </InputDiv>

                    <InputDiv>
                        <p> Lösenord </p>
                        <InputField
                            className = 'input'
                            type = 'password'
                            ref={userPasswordInput}
                            onChange={() => validatePassword()}
                            />
                            {userPasswordErrorMessage && <ErrorMessageUser> Var god ange ditt lösenord, från 8 till 30 tecken. </ErrorMessageUser>}
                    </InputDiv>

                    <LoginButton onClick={(event) => validateLogin(event)}> Logga in </LoginButton>
                    {loginError ? <p> Inget konto som matchar namn/lösenord hittades. Har du skrivit in dina uppgifter korrekt? </p> : null}
                </Form>
            </>)
            
        
        }


        </>
    )
}

export default Admin