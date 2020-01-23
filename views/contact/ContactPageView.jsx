import * as Styled from "./ContactPageView.css";
import dynamic from "next/dynamic";
import ContactForm from "../../components/contact-form/ContactForm";
import {useContext, useEffect} from "react";
import {AnimationStateContext} from "../../store/context";

const DynamicNoSSRMap = dynamic(() => import("../../components/map/Map"), {
    ssr: false
});

const ContactPageView = (props) => {
    const animationCompleted = useContext(AnimationStateContext);
    useEffect(() => {
        if (animationCompleted.homepageLoadedFirst === undefined) {
            animationCompleted.handleHomepageLoadedFirst(false);
        }
    });

    return (
        <Styled.ContactPageContainer>
            <ContactForm/>
            <Styled.ContactPageMapWrapper>

                <Styled.ContactPageInfo>
                    <p>Borna Sepic, Atlas - Craft for web development</p>
                    <p>
                        Mici Voljak 4, 51000, Rijeka, Croatia
                    </p>
                    <p>
                        <Styled.ContactAtSign>@:</Styled.ContactAtSign> <a href="mailto:bornasepic98@gmail.com">bornasepic98@gmail.com</a>
                    </p>
                </Styled.ContactPageInfo>
                <DynamicNoSSRMap/>
            </Styled.ContactPageMapWrapper>
        </Styled.ContactPageContainer>
    );
};

export default ContactPageView;