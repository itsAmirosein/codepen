import styled, { css, keyframes } from "styled-components/macro";
import { fadeIn, merge } from "react-animations";

const eventModal = merge(fadeIn);

const EventModal = keyframes`${eventModal}`;

const MainColor = "#0f1724";
const SecondaryColor = "#1d2636";

const White = "#ffffff";
const FadeWhite = "#ccc";

const ParentPattern = css`
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px 0px;
  border-radius: 5px;
`;

export const EventModalWrapper = styled.div`
  animation: 0.3s ${EventModal} ease-in-out;
  position: fixed;
  top: 20px;
  right: 20px;
  width: 280px;
  max-width: 95%;
  height: 500px;
  padding: 30px 0 30px 0;
  background-color: ${MainColor};
  ${ParentPattern};
  z-index: 999;
`;

export const EventModalHeader = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  border-bottom: 1px solid ${SecondaryColor};
  color: ${FadeWhite};
  overflow: hidden;
  span {
    font-size: 0.85rem;
  }
  svg {
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      color: ${White};
    }
  }
`;

export const EventModalFooter = styled.div`
  position: absolute;
  bottom: 0;
  cursor: pointer;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 8px;
  border-top: 1px solid ${SecondaryColor};
  color: ${FadeWhite};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${White};
  }
  span {
    font-size: 0.75rem;
  }
  svg {
    cursor: pointer;
    margin-left: 5px;
  }
`;

export const EventModalBody = styled.div`
  > div:last-child {
    border-bottom: none;
  }
  overflow-y: auto;
  overflow-x: hidden;
  height: 440px;
  transition: all 0.3s ease-in-out;
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(204, 204, 204, 0.1);
  }
`;

export const EventWrapper = styled.div`
  width: 280px;
  position: relative;
  height: 55px;
  padding: 0px 8px 0 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${FadeWhite};
  align-items: flex-start;
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid rgba(29, 38, 54, 0.4);
  overflow: hidden;
  cursor: pointer;
  span {
    font-size: 0.75rem;
  }
  &:hover {
    color: ${White};
    background-color: rgba(29, 38, 54, 0.4);
    > svg {
      opacity: 0.5;
    }
  }
  > svg {
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 5px;
    left: 10px;
    opacity: 0;
  }
`;

export const Timer = styled.small`
  position: absolute;
  left: 10px;
  bottom: 3px;
  font-size: 0.63rem;
  opacity: 0.7;
`;
