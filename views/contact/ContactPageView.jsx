import * as Styled from "./ContactPageView.css";
import dynamic from "next/dynamic";

const DynamicNoSSRMap = dynamic(() => import("../../components/map/Map"), {
    ssr: false
});

const ContactPageView = (props) => (
    <Styled.ContactPageContainer>
        <div>hello</div>
        <DynamicNoSSRMap />
    </Styled.ContactPageContainer>
);

export default ContactPageView;