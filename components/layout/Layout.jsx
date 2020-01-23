import {GlobalStyle} from "../../styles/global";

import * as Styled from "./Layout.css";
import Sidebar from "../sidebar/Sidebar";
import {useContext, useEffect} from "react";
import {AnimationStateContext} from "../../store/context";

const Layout = ({children}) => {
    const animationCompleted = useContext(AnimationStateContext);

    return (
        <Styled.LayoutWrapper>
            <GlobalStyle/>
            <Sidebar loadingForHomepage={!!animationCompleted.homepageLoadedFirst} />
            <main>
                {children}
            </main>
        </Styled.LayoutWrapper>
    );
};

export default Layout;