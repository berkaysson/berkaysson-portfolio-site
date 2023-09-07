import { styled } from "styled-components";

const AvatarImageWrapper = styled.img`
  --s: 280px; /* image size */
  --b: 5px; /* border thickness */
  --c: ${({ theme }) => theme.colors.light}; /* border color */
  --f: 1; /* initial scale */

  width: var(--s);
  padding-top: calc(var(--s) / 5);
  border-radius: 0 0 999px 999px;

  --_g: 50% / calc(100% / var(--f)) 100% no-repeat content-box;
  --_o: calc((1 / var(--f) - 1) * var(--s) / 2 - var(--b));

  outline: var(--b) solid var(--c);
  outline-offset: var(--_o);
  
  background: radial-gradient(
      circle closest-side,
      ${({ theme }) => theme.colors.lightest} calc(99% - var(--b)),
      var(--c) calc(100% - var(--b)) 99%,
      #0000
    )
    var(--_g);

  mask: linear-gradient(#000 0 0) no-repeat 50% calc(1px - var(--_o)) /
      calc(100% / var(--f) - 2 * var(--b) - 2px) 50%,
    radial-gradient(circle closest-side, #000 99%, #0000) var(--_g);
  -webkit-mask: linear-gradient(#000 0 0) no-repeat 50% calc(1px - var(--_o)) /
      calc(100% / var(--f) - 2 * var(--b) - 2px) 50%,
    radial-gradient(circle closest-side, #000 99%, #0000) var(--_g);
  
  transform: scale(var(--f));
  transition: 0.3s;
  transition-delay: 0.1s;

  &:hover {
    --f: 1.5;
  }
`;

const AvatarImage = ({ src, alt }) => {
  return <AvatarImageWrapper src={src} alt={alt} />;
};

export default AvatarImage;
