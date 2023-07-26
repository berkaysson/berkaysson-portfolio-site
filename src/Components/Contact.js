import { styled } from "styled-components";

const ContactWrapper = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.sizes.xlg};
  gap: ${({ theme }) => theme.sizes.lg};

  h1 {
    font-size: ${({ theme }) => theme.sizes.lg};
  }
`;

const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
  padding: ${({ theme }) => theme.sizes.lg};
  width: 100%;
  gap: ${({ theme }) => theme.sizes.lg};

  label {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${({ theme }) => theme.sizes.xsl};

    input, textarea{
      padding: ${({ theme }) => theme.sizes.xsl} ${({ theme }) => theme.sizes.sl};
      font-size: 14px;
    }

    textarea{
      resize: none;
    }
  }
`;

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <h1>Say Hi</h1>
      <ContactFormWrapper>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            required
            minLength="2"
            maxLength="100"
            placeholder="Enter your name"
          />
        </label>
        <label htmlFor="email">
          Email Address
          <input
            type="email"
            name="email"
            id="email"
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
        <button type="submit">Submit</button>
      </ContactFormWrapper>
    </ContactWrapper>
  );
};

export default Contact;
