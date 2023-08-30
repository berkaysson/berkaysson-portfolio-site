import { styled } from "styled-components";

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.sizes.xlg};
  gap: ${({ theme }) => theme.sizes.lg};

  h1 {
    font-size: ${({ theme }) => theme.sizes.lg};
  }

  @media(max-width:768px){
    padding:${({ theme }) => theme.sizes.md};
  }
`;

const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
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

  @media(max-width:768px){
    padding:${({ theme }) => theme.sizes.md};
  }
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <h1>Say Hi</h1>
      <ContactFormWrapper id="contact">
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
