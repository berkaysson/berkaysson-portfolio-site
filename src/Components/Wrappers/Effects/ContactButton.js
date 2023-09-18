import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactButtonWrapper = styled.button`
  width: 300px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.lightest};
  border-radius: ${({ theme }) => theme.borders.roundedSl};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.lightest};
  color: ${({ theme }) => theme.colors.black};
  margin: 0 auto;
  position: relative;
  overflow: hidden;

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

const ContactButton = () => {
  const [emailTextSpanY, setEmailTextSpanY] = useState(-70);

  return (
    <ContactButtonWrapper
      onMouseEnter={() => setEmailTextSpanY(0)}
      onMouseLeave={() => setEmailTextSpanY(-70)}
    >
      Let's Connect
      <motion.span
        transition={{ease: "backInOut"}}
        animate={{
          y: emailTextSpanY,
        }}
      >
        berkaysonel85@gmail.com
      </motion.span>
    </ContactButtonWrapper>
  );
};

export default ContactButton;
