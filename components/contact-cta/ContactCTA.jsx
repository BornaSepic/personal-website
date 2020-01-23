import Link from "next/link";
import * as Styled from "./ContactCTX.css";

const ContactCTX = (props) => (
  <Link href="/contact">
      <Styled.ContactButton shouldAnimate={!props.animationCompleted}>
         Contact Me
      </Styled.ContactButton>
  </Link>
);

export default ContactCTX;