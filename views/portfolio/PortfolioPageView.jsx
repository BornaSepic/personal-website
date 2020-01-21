import * as Styled from "./PortfolioPageView.css";
import Portfolio from "./components/Portfolio";

const PortfolioPageView = (props) => (
    <Styled.PortfolioPageContainer>
        <Styled.PortfolioInfo>
            <h1>Portfolio</h1>
            <p>
                Over the years, I’ve had the pleasure to work with dozens of really great people and companies on some
                really amazing projects.
            </p>
            <br/>
            <p>
                Here are a few clients who I lay claim to working with. Because of the type of
                clients I primarily work with, I’m not able to display some of my best work on this site.
            </p>
            <br/>
            <p>If you would like
                to see some examples or perhaps something a little more specific, please get in touch and I’d be happy
                to
                send along a few examples!
            </p>
        </Styled.PortfolioInfo>
        <Styled.LogosWrapper>
            <Portfolio />
        </Styled.LogosWrapper>
    </Styled.PortfolioPageContainer>
);

export default PortfolioPageView;