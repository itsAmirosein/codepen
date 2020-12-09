import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
const MainColor = "#0f1724";
const SecondaryColor = "#1d2636";
const White = "#ffffff";
const FadeWhite = "#ccc";
const Red = "#a71753";

const HoverMenu = css`
  background-color: ${MainColor};
  color: ${White};
`;

// link
export const PanelLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  padding: 0 5px;
  margin: 2px 0;
  cursor: pointer;
  &:hover {
    ${HoverMenu};
  }
  > svg {
    margin-left: 5px;
    font-size: 1.1rem;
  }
  background-color: ${(props) =>
    props.active === "active" ? MainColor : SecondaryColor};
  color: ${(props) => (props.active === "active" ? White : FadeWhite)};
`;

export const SidePanelWrapper = styled.div`
  position: fixed;
  width: 250px;
  height: 100%;
  top: 80px;
  right: 0;
  background-color: ${SecondaryColor};
  z-index: 2;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px 15px;
  font-size: 0.9rem;
  color: ${FadeWhite};
`;

export const UserPanel = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 20px;
  line-height: 40px;
  border-bottom: 3px solid ${Red};
  padding-bottom: 20px;
  span:first-child {
    cursor: pointer;
    color: ${FadeWhite};
    width: 100%;
    padding: 0 5px;
    transition: all 0.2s ease-in-out;
    border-radius: 5px;
    &:hover {
      ${HoverMenu};
    }
  }
  span:nth-child(3) {
    cursor: pointer;
    color: ${FadeWhite};
    width: 100%;
    padding: 0 5px;
    transition: all 0.2s ease-in-out;
    border-radius: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    > svg {
      font-size: 0.95rem;
      margin-right: 2px;
      margin-left: 5px;
    }
    &:hover {
      ${HoverMenu};
    }
  }

  > a {
    text-decoration: none;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border-radius: 5px;
    margin: 2px 0;
    padding: 0 5px;

    &:hover {
      ${HoverMenu};
    }
    &:not(:nth-child(2)) {
      > svg {
        margin-left: 5px;
        font-size: 1.1rem;
      }
    }
    &:nth-child(5) {
      > svg {
        font-size: 1rem;
      }
    }
    &:nth-child(4) {
      > svg {
        font-size: 1.2rem;
      }
    }
  }
`;
export const Award = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 20px;
  line-height: 40px;

  padding-bottom: 20px;
  border-bottom: none;
`;

export const Events = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.75rem !important;
  margin-right: 10px;
  width: 100%;
  color: ${FadeWhite};
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  padding: 0 5px;
  &:hover {
    ${HoverMenu};
    > svg:nth-child(2) {
      opacity: 1;
    }
  }
  > svg:first-child {
    margin-left: 4px;
    font-size: 0.85rem;
  }
  > svg:nth-child(2) {
    flex: 1;
    flex-basis: 0;
    font-size: 1.1rem;
    margin-right: 100px;
    opacity: 0;
    cursor: pointer;
    transition: all 0.3s ease;
  }
`;
