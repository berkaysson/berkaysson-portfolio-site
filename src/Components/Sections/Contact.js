import { styled } from "styled-components";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.sectionPadding};
  gap: ${({ theme }) => theme.sizes.lg};
  width: 100%;
  align-items: center;

  h1 {
    font-size: ${({ theme }) => theme.sizes.lg};
    margin-top: 2rem;
  }

  @media (max-width: 1000px) {
    padding: ${({ theme }) => theme.sizes.md};
  }
`;

const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3rem;
  max-width: 1000px;

  label {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${({ theme }) => theme.sizes.xsl};
    font-size: 16px;

    input,
    textarea {
      padding: ${({ theme }) => theme.sizes.sl} ${({ theme }) => theme.sizes.md};
      border: 1px solid ${({ theme }) => theme.colors.medium};
      border-radius: ${({ theme }) => theme.borders.roundedSl};
      background-color: ${({ theme }) => theme.colors.lightest};
      color: ${({ theme }) => theme.colors.black};

      &::placeholder {
        color: ${({ theme }) => theme.colors.medium};
        font-size: 14px;
      }
    }

    textarea {
      resize: none;
    }
  }

  @media (max-width: 1000px) {
  }
`;

const ContactFormSubmitButton = styled.button`
  width: 250px;
  height: 45px;
  border: 1px solid ${({ theme }) => theme.colors.medium};
  border-radius: ${({ theme }) => theme.borders.roundedSl};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.lightest};
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
  position: relative;
  overflow: hidden;
  font-size: 14px;

  span {
    position: absolute;
    color: ${({ theme }) => theme.colors.lightest};
    background-color: ${({ theme }) => theme.colors.dark};
    height: 70px;
    width: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailTextSpanY, setEmailTextSpanY] = useState(-70);

  const sendEmailForm = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_3d3qgab",
        "template_zggdnef",
        form.current,
        "O8ko5TRQKxDrO981S"
      )
      .then((result) => {
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <ContactWrapper>
      <h1>Want to get in touch?</h1>
      <h2>Drop me a line!</h2>
      <ContactFormWrapper id="contact" ref={form} onSubmit={sendEmailForm}>
        <label htmlFor="from_name">
          Name
          <input
            type="text"
            name="from_name"
            id="from_name"
            required
            minLength="2"
            maxLength="100"
            placeholder="Enter your name"
          />
        </label>
        <label htmlFor="email_id">
          Email Address
          <input
            type="email"
            name="email_id"
            id="email_id"
            required
            maxLength="100"
            placeholder="Enter your email"
          />
        </label>
        <label htmlFor="message">
          Message
          <textarea
            name="message"
            id="message"
            required
            minLength="10"
            maxLength="1000"
            placeholder="Enter your message"
            rows={7}
          />
        </label>
        <ContactFormSubmitButton
          type="submit"
          disabled={isSubmitting}
          onMouseEnter={() => setEmailTextSpanY(0)}
          onMouseLeave={() => setEmailTextSpanY(-60)}
        >
          {!isSubmitting ? "Send" : "Sending..."}
          <motion.span
            transition={{ ease: "backInOut" }}
            animate={{
              y: emailTextSpanY,
            }}
          >
            {!isSubmitting ? "Send to berkaysonel85@gmail.com" : "Sending..."}
          </motion.span>
        </ContactFormSubmitButton>
      </ContactFormWrapper>
    </ContactWrapper>
  );
};

export default Contact;
