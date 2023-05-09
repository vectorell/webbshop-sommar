/** Styled Components */
import { UserDiv } from "../../routes/login/StyledAdmin"
import { UserImageDiv } from "../../routes/login/StyledAdmin"
import { UserImage } from "../../routes/login/StyledAdmin"
import { UserName } from "../../routes/login/StyledAdmin"
import { EditIcon } from "../../routes/login/StyledAdmin"
import noPhoto from "../../../src/assets/staff/no-photo.jpg"
import addIcon from "../../../src/assets/add-button.png"
// import { addNewUser } from "../../utils"
import { useRecoilState } from "recoil"
import { newUserState } from "../../recoil/atom/newUser/newUserState"

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