import staffList from "../../../recoil/atom/staffList/staffList"
import { useRecoilState } from "recoil"
import { deleteUser } from "../../../utils"

/** Styled Components */
import { UserDiv } from "../StyledAdmin"
import { UserImageDiv } from "../StyledAdmin"
import { UserImage } from "../StyledAdmin"
import { UserName } from "../StyledAdmin"
import { EditIcon } from "../StyledAdmin"
import noPhoto from "../../../assets/no-photo.jpg"

import editIcon from "../../../assets/edit-icon2.png"
function Users() {
    const [staff,setStaff] = useRecoilState(staffList)
    
    return (
        <>
            {staff.map(staff => 
                <UserDiv key={staff.id}>
                    <UserImageDiv> 
                        <UserImage src={staff.image !== '' ? staff.image : noPhoto}/> 
                    </UserImageDiv>
                    <UserName> {staff.name} </UserName>
                    <EditIcon src={editIcon} onClick={() => deleteUser()}/>
                </UserDiv>
            )}
        
        </>
        )
}

export default Users