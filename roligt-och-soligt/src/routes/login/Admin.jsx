import { loginState } from "../../recoil/atom/loginState/loginState"
import { useRecoilState } from "recoil"


/** Styled Components */
import { InputDiv, PageTitle } from "./StyledAdmin"
import { Form } from "./StyledAdmin"
import { InputField } from "./StyledAdmin"
import { ContentDiv } from "./StyledAdmin"
import { UserDiv } from "./StyledAdmin"
import { UserImageDiv } from "./StyledAdmin"
import { UserImage } from "./StyledAdmin"
import { UserName } from "./StyledAdmin"
import { EditIcon } from "./StyledAdmin"

import StaffPer from "../../assets/staff/per.jpeg"
import editIcon from "../../assets/edit-icon2.png"


function Admin() {
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState)

    return (
        <>
            <PageTitle> Admin  </PageTitle>

            <button onClick={ setIsLoggedIn(!isLoggedIn) }> {isLoggedIn ? 'Logga ut' : 'Logga in' } </button>

            {/* OM INLOGGAD */}
            {isLoggedIn && (
                <>  
                    <p>Användare</p>
                    <ContentDiv>
                        <UserDiv>
                            <UserImageDiv>
                                <UserImage src={StaffPer} alt="Per"/>
                            </UserImageDiv>
                            <UserName> Victor </UserName>
                            <EditIcon src={editIcon} />
                        </UserDiv>
                    </ContentDiv>
                </>
            )}
            
            
            
            { !isLoggedIn &&
            // OM UTLOGGAD
            
            (<>
                <Form>
                    <InputDiv>
                        <p> Användarnamn </p>
                        <InputField />
                    </InputDiv>

                    <InputDiv>
                        <p> Lösenord </p>
                        <InputField />
                    </InputDiv>

                    <button> Logga in </button>
                </Form>
            </>)
            
        
        }


        </>
    )
}

export default Admin