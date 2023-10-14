import { styled } from "styled-components";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.sectionPadding};
  gap: ${({ theme }) => theme.sizes.lg};
  width: 100%;

  h1 {
    font-size: ${({ theme }) => theme.sizes.lg};
  }

  @media (max-width: 1000px) {
    padding: ${({ theme }) => theme.sizes.md};
  }
`;

const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.sizes.lg};

  label {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${({ theme }) => theme.sizes.xsl};
    font-size: 14px;

    input,
    textarea {
      padding: ${({ theme }) => theme.sizes.xsl} ${({ theme }) => theme.sizes.sl};
      border: 1px solid ${({ theme }) => theme.colors.medium};
      border-radius: ${({ theme }) => theme.borders.roundedSl};
      background-color: ${({ theme }) => theme.colors.lightest};
      color: ${({ theme }) => theme.colors.black};

    &::placeholder{
      color: ${({ theme }) => theme.colors.medium};
      font-size: 12px;
    }
    }

    textarea {
      resize: none;
    }
  }

  @media (max-width: 1000px) {
  }
`;

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      <h1>Say Hi</h1>
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
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </ContactFormWrapper>
    </ContactWrapper>
  );
};

export default Contact;
