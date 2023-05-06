/** Styled Components */
import { UserDiv } from "../../routes/login/StyledAdmin"
import { UserImageDiv } from "../../routes/login/StyledAdmin"
import { UserImage } from "../../routes/login/StyledAdmin"
import { EditIcon } from "../../routes/login/StyledAdmin"
import noPhoto from "../../assets/staff/no-photo.jpg"
import addIcon from "../../assets/add-button.png"
import { useRef, useState } from "react"
import { useRecoilState } from "recoil"
import { newUserState } from "../../recoil/atom/newUser/newUserState"
import iconChecked from '../../assets/checked.png'
import { InputForm } from "./StyledNewUserDirty"
import { addNewUser } from "../../utils"
import staffList from "../../recoil/atom/staffList/staffList"
import { validateName } from "../../utils"
import { ErrorMessage } from "./StyledNewUserDirty"
import { Message } from "../../routes/login/StyledAdmin"

function NewUserDirty() {
    const [isNewUserClean, setIsNewUserClean] = useRecoilState(newUserState)
    const [inputContent, setInputContent] = useState(null)
    const inputField = useRef(null)
    const [staff, setStaff] = useRecoilState(staffList);
    const [userNameErrorMessage, setUserNameErrorMessage] = useState((false))




    return (
        <UserDiv>
            <UserImageDiv> 
                <UserImage src={noPhoto}/> 
            </UserImageDiv>
            <InputForm 
                ref={inputField} 
                className="input"
                placeholder="Användarnamn"
                onChange={() => {
                    setInputContent(inputField.current.value)
                    validateName(inputField, setUserNameErrorMessage)
                }}
                />

                {userNameErrorMessage ? <ErrorMessage> Ange minst 2 bokstäver.</ErrorMessage> : <Message> Ange namn </Message>}

                {inputContent === null ? 
                    <EditIcon src={addIcon} onClick={() => setIsNewUserClean(!isNewUserClean)}/> 
                    
                    : <EditIcon src={iconChecked} onClick={() => inputContent === null ? setIsNewUserClean(!isNewUserClean) : 
                     
                    
                    (inputField.current.classList.contains('valid')) ? (addNewUser(inputContent, staff, setStaff, setInputContent), setIsNewUserClean(!isNewUserClean)) : null
                    } /> 
                }

            
        </UserDiv>
    )
}

export default NewUserDirty