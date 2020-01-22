import * as Styled from "./ContactForm.css";

const ContactForm = () => {
    return (
        <Styled.FormContainer>
            <Styled.ContactIntro>
                <h2>Contact me</h2>
                <p>
                    I am interested in freelance opportunities – especially ambitious or large projects. However, if you
                    have other request or question, don’t hesitate to contact me using below form either.
                </p>
            </Styled.ContactIntro>
            <form name="contact" method="POST" data-netlify="true">
                <Styled.FormItem>
                    <label>Your Name: </label>
                    <input type="text" name="name"/>
                </Styled.FormItem>
                <Styled.FormItem>
                    <label>Your Email: </label>
                    <input type="email" name="email"/>
                </Styled.FormItem>
                <Styled.FormItem>
                    <label>Message: </label>
                    <textarea rows={5} name="message"></textarea>
                </Styled.FormItem>
                <Styled.FormSubmit type="submit">Send</Styled.FormSubmit>
            </form>
        </Styled.FormContainer>
    );
};

export default ContactForm;