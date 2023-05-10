import heroImg from '../../assets/hero-image.jpg'
import { NavLink } from 'react-router-dom';
import { PageDiv, WelcomeCardDiv, PageTitle, InfoDiv, MainInfoDiv, InfoTitle, ImageElement, ProductsButton } from "./StyledStart";

export default function Start() {

    return (
        <PageDiv>
            <WelcomeCardDiv>
                <PageTitle> Roligt & Soligt </PageTitle>
                <p> En webbshop för sommarnjutare! </p>
                <ImageElement src={heroImg} alt="hero image"/>
            </WelcomeCardDiv>

            <MainInfoDiv>
                <InfoDiv>
                    <InfoTitle> Address: </InfoTitle>
                    <p> Tullbärsvägen 12, 523 43 Nynäshamn </p>
                </InfoDiv>

                <InfoDiv>
                    <InfoTitle> Öppettider: </InfoTitle>
                    <p> Måndag - fredag: 10 till 18 </p>
                </InfoDiv>

                <ProductsButton to="/products"> Till produkterna! </ProductsButton>

            </MainInfoDiv>

        </PageDiv>
    )
}