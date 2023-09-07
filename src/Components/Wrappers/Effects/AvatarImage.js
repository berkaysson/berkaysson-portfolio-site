import { styled } from "styled-components";

const AvatarImageWrapper = styled.img`
  border: 1px solid red;
  width: 400px;
  aspect-ratio: 1;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const AvatarImage = ({ src, alt }) => {
  return <AvatarImageWrapper src={src} alt={alt} />;
};

export default AvatarImage;
