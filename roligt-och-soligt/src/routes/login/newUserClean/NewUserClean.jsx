/** Styled Components */
import { UserDiv } from "../StyledAdmin"
import { UserImageDiv } from "../StyledAdmin"
import { UserImage } from "../StyledAdmin"
import { UserName } from "../StyledAdmin"
import { EditIcon } from "../StyledAdmin"
import noPhoto from "../../../assets/no-photo.jpg"
import addIcon from "../../../assets/add-button.png"
import { addNewUser } from "../../../utils"
import { useRecoilState } from "recoil"
import { newUserState } from "../../../recoil/atom/newUser/newUserState"

function NewUserClean() {
    const [isNewUserClean, setIsNewUserClean] = useRecoilState(newUserState)

    return (
        <UserDiv>
            <UserImageDiv> 
                <UserImage src={noPhoto}/> 
            </UserImageDiv>
            <UserName> Ny användare </UserName>
            <EditIcon src={addIcon} onClick={() => setIsNewUserClean(!isNewUserClean)}/>
        </UserDiv>
    )
}

export default NewUserClean