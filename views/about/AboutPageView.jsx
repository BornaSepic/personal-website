import * as Styled from "./AboutPageView.css";
import History from "./components/History";

const AboutPageView = (props) => (
    <Styled.AboutPageContainer>
        <Styled.AboutContent>
            <h1>About me</h1>
            <p>Well-organised person, problem solver, independent developer with high attention to detail from sunny Croatia.</p>
            <br/>

            <p>Interested in the entire WWW spectrum and working on ambitious projects with positive people.</p>
            <br/>
            <i>Chess enthusiast / Avid gamer  </i>
        </Styled.AboutContent>
        <History/>
    </Styled.AboutPageContainer>
);

export default AboutPageView;