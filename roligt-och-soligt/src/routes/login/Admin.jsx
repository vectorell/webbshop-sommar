import { loginState } from "../../recoil/atom/loginState/loginState"
import { useRecoilState } from "recoil"
import { useRef, useState } from "react"
import NewUserClean from "../../components/newUserClean/NewUserClean"
import NewUserDirty from "../../components/newUserDirty/NewUserDirty"
import Users from "../../components/users/Users"
import { newUserState } from "../../recoil/atom/newUser/newUserState"
import { validateName, validatePassword } from "../../utils"
import { whoAmI } from "../../recoil/atom/whoAmI/whoAmI"
import {InputDiv,PageTitle,Form,InputField,ContentDiv,ErrorMessageUser,LoginButton,StyledNavLink, ParaFieldName} from "./StyledAdmin"
import loadingSpinner from '../../assets/loading-spinner.gif'

export default function Admin() {
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState)
    const [loginError, setLoginError] = useState(false)
    const userNameInput = useRef(null)
    const [userNameErrorMessage, setUserNameErrorMessage] = useState(false)
    const userPasswordInput = useRef(null)
    const [userPasswordErrorMessage, setUserPasswordErrorMessage] = useState(false)
    const [isNewUserClean, setIsNewUserClean] = useRecoilState(newUserState)
    const [whoIAm, setWhoIAm] = useRecoilState(whoAmI)
    const loaderRef = useRef(null)

    async function validateLogin(name, password) {
        event.preventDefault()
        setLoginError(false)

        const usernameIsValid = /^[a-zA-Z\s]{2,}$/.test(name)
        const passwordIsValid = /^.{8,30}$/.test(password)

        if (usernameIsValid && passwordIsValid) {
            loaderRef.current.style.display = 'block';

            try {
                const data = { shopid: 3001, username: name, password: password }
                const options = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                }
    
                let response = await fetch("https://www.forverkliga.se/JavaScript/api/fe/?action=login-user", options)
                let statusObject = await response.json()
                console.log(statusObject)
                statusObject.status === "success"
                    ? (setIsLoggedIn(true),
                      setLoginError(false),
                      setWhoIAm({ ...whoIAm, username: name }))
                    : setLoginError(true)
            } catch (error) {
            } finally {
                loaderRef.current.style.display = 'none';
            }
        }
    }

    return (
        <>
            <PageTitle> {isLoggedIn ? `Välkommen, ${whoIAm.username}!` : "Logga in"} </PageTitle>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Logga ut" : "Logga in"}{" "}
            </button>

            {isLoggedIn && (
                <>
                    <p> Användare </p>
                    <ContentDiv>
                        <Users />
                        {isNewUserClean ? <NewUserClean /> : <NewUserDirty />}
                    </ContentDiv>

                    <StyledNavLink to="/admin/products"> Redigera produkter </StyledNavLink>
                    <LoginButton onClick={() => {setLoginError(false), setIsLoggedIn(false)}}>
                        Logga ut
                    </LoginButton>
                </>)}

            {!isLoggedIn && ( <>
                    <Form>
                        <InputDiv>
                            <ParaFieldName> Användarnamn </ParaFieldName>
                            <InputField
                                className="input"
                                type="text"
                                ref={userNameInput}
                                onChange={() => validateName(userNameInput, setUserNameErrorMessage)}/>
                            {userNameErrorMessage && (
                                <ErrorMessageUser> Var god ange ditt användarnamn med enbart bokstäver, minst två stycken. </ErrorMessageUser> )}
                        </InputDiv>

                        <InputDiv>
                            <ParaFieldName> Lösenord </ParaFieldName>
                            <InputField
                                className="input"
                                type="password"
                                ref={userPasswordInput}
                                onChange={() =>validatePassword(userPasswordInput, setUserPasswordErrorMessage)}
                            />
                            {userPasswordErrorMessage && (
                                <ErrorMessageUser>
                                    Var god ange ditt lösenord, från 8 till 30 tecken.
                                </ErrorMessageUser>
                            )}
                        </InputDiv>

                        <LoginButton onClick={() => validateLogin(userNameInput.current.value, userPasswordInput.current.value)}> 
                            Logga in 
                        </LoginButton>

                        <img ref={loaderRef} src={loadingSpinner} style={{ display: 'none' }} />
                        {loginError ? (
                            <p> Inget konto som matchar namn/lösenord hittades. Har du skrivit in dina uppgifter korrekt? </p> ) : null}
                    </Form>
                </>
            )}
        </>
    )
}