import * as Styled from "./Sidebar.css";
import Navigation from "../navigation/Navigation";

const Sidebar = (props) => (
    <>
        <Styled.Sidebar loadingForHomepage={props.loadingForHomepage}>
            <Navigation />
        </Styled.Sidebar>
    </>
);

export default Sidebar;