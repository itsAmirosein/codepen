import styled, { css } from "styled-components/macro";

const SecondaryColor = "#1d2636";

const FadeWhite = "#ccc";

const ParentPattern = css`
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px 0px;
  border-radius: 5px;
`;

export const TechnoHeader = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${SecondaryColor};
  ${ParentPattern};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 8px;
  font-size: 1.3rem;
  color: ${FadeWhite};
`;

export const TechnoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0 30px;
`;
export const TechnoBody = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 5px 12px;
  text-align: justify;
  color: ${FadeWhite};
  background-color: ${SecondaryColor};
  ${ParentPattern};
  line-height: 30px;
  font-size: 0.9rem;
  margin: 20px 0;
`;
export const TechnoItem = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  background-color: #fff;
  margin-top: 20px;
  background-color: ${SecondaryColor};
  ${ParentPattern};
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px 1px;
  }
  img {
    height: 150px;
    object-fit: contain;
    pointer-events: none;
  }
`;

export const TechnoBackdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(15, 23, 36, 0.8);
  right: 0;
  top: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${FadeWhite};
  font-size: 2rem;
`;
