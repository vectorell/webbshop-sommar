/** Styled Components */
import { UserDiv, UserImageDiv, UserImage, UserName, EditIcon } from "./StyledNewUserClean"
import noPhoto from "../../../src/assets/staff/no-photo.jpg"
import addIcon from "../../../src/assets/add-button.png"
import { useRecoilState } from "recoil"
import { newUserState } from "../../recoil/atom/newUser/newUserState"

function NewUserClean() {
    const [isNewUserClean, setIsNewUserClean] = useRecoilState(newUserState)

    return (
        <UserDiv>
            {/* <UserImageDiv> 
                <UserImage src={noPhoto}/> 
            </UserImageDiv> */}
            <UserName> Ny användare? </UserName>
            <EditIcon src={addIcon} onClick={() => setIsNewUserClean(!isNewUserClean)}/>
        </UserDiv>
    )
}

export default NewUserClean