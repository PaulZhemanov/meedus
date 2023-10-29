import styled from "@emotion/styled";

const NftPreview = styled.div<{ src?: string }>`
  width: 100%;
  border-radius: 8px;
  ${({src}) =>
          src == null
                  ? "border: 2px solid #000"
                  : `background: url(${src}) center no-repeat`};
  background-size: cover;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.01);
`;


export default NftPreview
