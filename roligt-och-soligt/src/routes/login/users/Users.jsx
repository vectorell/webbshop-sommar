import staffList from "../../../recoil/atom/staffList/staffList"
import { useRecoilState } from "recoil"
import { deleteUser } from "../../../utils"

/** Styled Components */
import { UserDiv } from "../StyledAdmin"
import { UserImageDiv } from "../StyledAdmin"
import { UserImage } from "../StyledAdmin"
import { UserName } from "../StyledAdmin"
import { EditIcon } from "../StyledAdmin"
import deleteIcon from "../../../assets/close.png"

import editIcon from "../../../assets/edit-icon2.png"
function Users() {
    const [staff,setStaff] = useRecoilState(staffList)
    
    return (
        <>
            {staff.map((user, index) => 
                <UserDiv key={index}>
                    <UserImageDiv> 
                        <UserImage src={user.image !== '' ? user.image : noPhoto}/> 
                    </UserImageDiv>
                    <UserName> {user.name} </UserName>
                    <EditIcon src={deleteIcon} onClick={() => deleteUser(user.id, staff, setStaff)}/>
                </UserDiv>
            )}
        
        </>
        )
}

export default Users