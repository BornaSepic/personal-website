import {GlobalStyle} from "../../styles/global";

import * as Styled from "./Layout.css";
import Sidebar from "../sidebar/Sidebar";

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