import {Sidebar} from "../sidebar/Sidebar.css";
import {GlobalStyle} from "../../styles/global";

import * as Styled from "./Layout.css";

const Layout = ({children}) => (
    <Styled.LayoutWrapper>
        <GlobalStyle/>
        <Sidebar />
        <main>
            {children}
        </main>
    </Styled.LayoutWrapper>
);

export default Layout;