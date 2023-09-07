import { styled } from "styled-components";

const AvatarImageWrapper = styled.img`
  border: 1px solid red;
`;

const AvatarImage = ({ src, alt }) => {
  return <AvatarImageWrapper src={src} alt={alt} />;
};

export default AvatarImage;
