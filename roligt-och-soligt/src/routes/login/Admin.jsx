import { loginState } from "../../recoil/atom/loginState/loginState"
import { useRecoilState } from "recoil"
import { useRef, useState } from "react"
import NewUserClean from "../../components/newUserClean/NewUserClean"
import NewUserDirty from "../../components/newUserDirty/NewUserDirty"
import Users from "../../components/users/Users"
import { newUserState } from "../../recoil/atom/newUser/newUserState"
import { validateName } from "../../utils"
import { accounts } from "../../recoil/atom/accounts/accounts"
import { whoAmI } from "../../recoil/atom/whoAmI/whoAmI"
import { InputDiv, PageTitle, Form, InputField, ContentDiv, ErrorMessageUser, LoginButton, StyledNavLink } from "./StyledAdmin"


export default function Admin() {
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState)
    const [loginError, setLoginError] = useState(false)
    const userNameInput = useRef(null)
    const [userNameErrorMessage, setUserNameErrorMessage] = useState((false))
    const userPasswordInput = useRef(null)
    const [userPasswordErrorMessage, setUserPasswordErrorMessage] = useState((false))
    const [isNewUserClean, setIsNewUserClean] = useRecoilState(newUserState)

    const [accountList, setAccountList] = useRecoilState(accounts)
    const [whoIAm, setWhoIAm] = useRecoilState(whoAmI)

    /** LÖSENORD ******/
    function validatePassword() {
        const userString = userPasswordInput.current.value
        const regex = /^.{8,30}$/

        userString === '' ? (userPasswordInput.current.className = 'input', setUserPasswordErrorMessage((false)))

        : regex.test(userString) ? (userPasswordInput.current.className = 'input valid', setUserPasswordErrorMessage((false)))

        : (userPasswordInput.current.className = 'input invalid', setUserPasswordErrorMessage((true)))
    }


    /** LOGIN-KNAPP ******/
    // function validateLogin(event) {
    //     event.preventDefault()
    //     setLoginError((false))
        
    //     // userNameInput.current.value === account.username && userPasswordInput.current.value === account.username ? setIsLoggedIn(true)
    //     // : setIsLoggedIn(false), setLoginError(true)

    //     let foundAccount
    //     let foundAccountNameIsValid
    //     let foundAccountPasswordValid

    //     if (accountList.find(account => account.username === (userNameInput.current.value)) ) {
    //         foundAccount = accountList.find(account => account.username === (userNameInput.current.value))
    //         foundAccountNameIsValid = (foundAccount.username == userNameInput.current.value)
    //         foundAccountPasswordValid = (foundAccount.password == userPasswordInput.current.value)

            

    //     } else {
    //         foundAccount = null
    //     }

    //     console.log(foundAccount)



    //     if (foundAccount === null) {
    //         console.log('nay')
    //         setIsLoggedIn(false)
    //         setLoginError(true)
    //         userPasswordInput.current.className = 'input'
    //         userNameInput.current.className = 'input'
    //     } else if (foundAccountNameIsValid && foundAccountPasswordValid) {
    //         console.log('yay')
    //         setIsLoggedIn((true))
            
    //         let updateWhoIAm = {...whoIAm, username: foundAccount.username}
    //         updateWhoIAm.username = foundAccount.username
            
    //         setWhoIAm(updateWhoIAm)
    //         console.log(updateWhoIAm)

    //         setWhoIAm(updateWhoIAm)
    //         console.log('setWhoIAm', whoIAm, whoAmI)
    //         userPasswordInput.current.className = 'input'
    //         userNameInput.current.className = 'input'
    //     }


    // }

    // fetchUsers()
    
    async function validateLogin(name, password) {
        event.preventDefault()
        setLoginError((false))

        const data = { shopid: 3001, username: name, password: password }
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }

        let response = await fetch('https://www.forverkliga.se/JavaScript/api/fe/?action=login-user', options)
        let statusObject = await response.json()
        console.log(statusObject)

        statusObject.status === 'success' ? 
            (setIsLoggedIn(true), 
            setLoginError(false),
            setWhoIAm({...whoIAm, username: name})) 
        : setLoginError(true)
    }
    
    return (
        <>
            <PageTitle>{isLoggedIn ? `Välkommen ${whoIAm.username}!` : 'Logga in'}</PageTitle>
            <button onClick={() => setIsLoggedIn(!isLoggedIn) }> 
            {isLoggedIn ? 'Logga ut' : 'Logga in'} </button>

            {isLoggedIn && ( <>
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

                        <LoginButton onClick={() => validateLogin(userNameInput.current.value, userPasswordInput.current.value)}> Logga in </LoginButton>
                        {loginError ? <p> Inget konto som matchar namn/lösenord hittades. Har du skrivit in dina uppgifter korrekt? </p> : null}
                    </Form>
                </>)
            }
        </>
    )
}