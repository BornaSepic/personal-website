import Link from "next/link";
import * as Styled from "./ContactCTX.css";

const ContactCTX = () => (
  <Link href="/contact">
      <Styled.ContactButton>
         Contact Me
      </Styled.ContactButton>
  </Link>
);

export default ContactCTX;