import IntroText from "../../components/intro-text/IntroText";
import * as Styled from "./IndexPageView.css";
import ContactCTX from "../../components/contact-cta/ContactCTA";

const IndexPageView = (props) => (
    <Styled.IndexPageContainer>
        <IntroText/>
        <ContactCTX/>
    </Styled.IndexPageContainer>
);

export default IndexPageView;