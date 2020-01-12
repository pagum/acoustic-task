import styled from "styled-components";

export const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  width: 95%;
`;

export const ImageContainer = styled.img`
  align-self: center;
  width:60%;
  max-width: 700px @media (max-width: 800px) {
    max-width: 500px;
  }
  @media (max-width: 600px) {
    max-width: 250px;
  }
`;
