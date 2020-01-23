import IntroText from "../../components/intro-text/IntroText";
import * as Styled from "./IndexPageView.css";
import ContactCTX from "../../components/contact-cta/ContactCTA";
import {AnimationStateContext} from "../../store/context";
import {useContext, useEffect} from "react";

const IndexPageView = (props) => {
    const animationCompleted = useContext(AnimationStateContext);
    useEffect(() => {
        if (!animationCompleted.homepageLoaded) {
            setTimeout(() => {
                animationCompleted.handleHomepageStatusChange(true);
            }, 6000)
        }
    });
    return (
        <Styled.IndexPageContainer>
            <IntroText animationCompleted={animationCompleted.homepageLoaded} />
            <ContactCTX animationCompleted={animationCompleted.homepageLoaded} />
        </Styled.IndexPageContainer>
    );
}

export default IndexPageView;