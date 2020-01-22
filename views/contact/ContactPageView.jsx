import * as Styled from "./ContactPageView.css";
import dynamic from "next/dynamic";
import ContactForm from "../../components/contact-form/ContactForm";

const DynamicNoSSRMap = dynamic(() => import("../../components/map/Map"), {
    ssr: false
});

const ContactPageView = (props) => (
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

export default ContactPageView;