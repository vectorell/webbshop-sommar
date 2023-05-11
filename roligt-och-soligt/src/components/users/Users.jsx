import staffList from "../../recoil/atom/staffList/staffList"
import { useRecoilState } from "recoil"
import defaultImage from '../../assets/staff/no-photo.jpg'
import loadingSpinner from "../../recoil/atom/loadingSpinner/loadingSpinner"
import { UserDiv, UserImageDiv, UserImage, UserName, EditIcon } from "../../components/users/StyledUsers.jsx"
import deleteIcon from "../../assets/close.png"

function Users() {
    const [staff, setStaff] = useRecoilState(staffList)
    const [spinnerLoading, setSpinnerLoading] = useRecoilState(loadingSpinner)
    const baseUrl = 'https://www.forverkliga.se/JavaScript/api/fe/'

    async function deleteUser(user) {
        setSpinnerLoading(true)
        try {
            const data = { shopid: 3001, userid: user.id }
        
            const options = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            }
        
            let response = await fetch((baseUrl + '?action=delete-user'), options)
            console.log(response)
    
            const newArray = [...staff]
            const filteredArray = newArray.filter(selectedUser => selectedUser.id !== user.id)
            setStaff(filteredArray)
            
        } catch (error) {
            console.log('error')
        } finally {
            setSpinnerLoading(false)
        }
    }

    
    return (
        <>
            {staff && staff.map((user, index) => 
                <UserDiv key={index}>
                    <UserImageDiv> 
                        <UserImage src={defaultImage}/> 
                    </UserImageDiv>
                    <UserName> {user.username} </UserName>
                    <EditIcon src={deleteIcon} onClick={() => deleteUser(user)}/>
                </UserDiv>
            )}
        </>
        )
}

export default Users