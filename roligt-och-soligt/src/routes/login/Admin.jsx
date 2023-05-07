import { loginState } from "../../recoil/atom/loginState/loginState"
import { useRecoilState } from "recoil"
import { useEffect, useRef, useState } from "react"
import staffList from "../../recoil/atom/staffList/staffList"
import { addNewUser } from "../../utils"
import NewUserClean from "../../components/newUserClean/NewUserClean"
import NewUserDirty from "../../components/newUserDirty/NewUserDirty"
import Users from "../../components/users/Users"
import { newUserState } from "../../recoil/atom/newUser/newUserState"
import { validateName } from "../../utils"
import AdminProducts from "../adminProducts/AdminProducts"
import { StyledNavLink } from "./StyledAdmin"



/** Styled Components */
import { InputDiv, PageTitle } from "./StyledAdmin"
import { Form } from "./StyledAdmin"
import { InputField } from "./StyledAdmin"
import { ContentDiv } from "./StyledAdmin"
import { ErrorMessageUser } from "./StyledAdmin"
import { LoginButton } from "./StyledAdmin"
import { NavLink } from "react-router-dom"




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
                    
                    <StyledNavLink to="/admin/products"> Redigera produkter </StyledNavLink>

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
                            onChange={() => validateName(userNameInput, setUserNameErrorMessage)}
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