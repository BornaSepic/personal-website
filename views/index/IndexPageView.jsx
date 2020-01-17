import Layout from "../../components/layout/Layout";

import IntroText from "../../components/intro-text/IntroText";
import * as Styled from "./IndexPageView.css";

const IndexPage = (props) => (
    <Layout>
       <Styled.IndexPageContainer>
           <IntroText />
       </Styled.IndexPageContainer>
    </Layout>
);

export default IndexPage;