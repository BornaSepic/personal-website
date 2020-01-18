import * as Styled from "./Sidebar.css";
import Navigation from "../navigation/Navigation";

const Sidebar = ({children}) => (
    <>
        <Styled.Sidebar>
            <Navigation />
        </Styled.Sidebar>
    </>
);

export default Sidebar;