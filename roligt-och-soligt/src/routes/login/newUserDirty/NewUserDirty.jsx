/** Styled Components */
import { UserDiv } from "../StyledAdmin"
import { UserImageDiv } from "../StyledAdmin"
import { UserImage } from "../StyledAdmin"
import { EditIcon } from "../StyledAdmin"
import noPhoto from "../../../assets/no-photo.jpg"
import addIcon from "../../../assets/add-button.png"
import { useRef, useState } from "react"
import { useRecoilState } from "recoil"
import { newUserState } from "../../../recoil/atom/newUser/newUserState"
import iconChecked from '../../../assets/checked.png'
import { InputForm } from "./StyledNewUserDirty"
import { addNewUser } from "../../../utils"
import staffList from "../../../recoil/atom/staffList/staffList"

function NewUserDirty() {
    const [isNewUserClean, setIsNewUserClean] = useRecoilState(newUserState)
    const [inputContent, setInputContent] = useState(null)
    const inputField = useRef('')
    const [staff, setStaff] = useRecoilState(staffList);




    return (
        <UserDiv>
            <UserImageDiv> 
                <UserImage src={noPhoto}/> 
            </UserImageDiv>
            <InputForm 
                ref={inputField} 
                placeholder="Användarnamn"
                onChange={() => setInputContent(inputField.current.value)}
                />

                {inputContent === '' ? <EditIcon src={addIcon} onClick={() => setIsNewUserClean(!isNewUserClean)}/> 
                : <EditIcon src={iconChecked} onClick={() => {
                    inputContent === null ? setIsNewUserClean(!isNewUserClean)
                    : addNewUser(inputContent, staff, setStaff, setInputContent), setIsNewUserClean(!isNewUserClean)
                }}/> 
                }

            
        </UserDiv>
    )
}

export default NewUserDirty