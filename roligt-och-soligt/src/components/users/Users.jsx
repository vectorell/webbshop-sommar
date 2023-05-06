import staffList from "../../recoil/atom/staffList/staffList"
import { useRecoilState } from "recoil"
import { deleteUser } from "../../utils"

/** Styled Components */
import { UserDiv } from "../../routes/login/StyledAdmin"
import { UserImageDiv } from "../../routes/login/StyledAdmin"
import { UserImage } from "../../routes/login/StyledAdmin"
import { UserName } from "../../routes/login/StyledAdmin"
import { EditIcon } from "../../routes/login/StyledAdmin"
import deleteIcon from "../../assets/close.png"

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