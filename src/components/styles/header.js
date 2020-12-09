import styled, { css, keyframes } from "styled-components/macro";
import { fadeIn, merge } from "react-animations";
const eventModal = merge(fadeIn);
const EventModal = keyframes`${eventModal}`;

const SecondaryColor = "#1d2636";
const MainColor = "#0f1724";
const White = "#ffffff";
const FadeWhite = "#ccc";
const Red = "#a71753";
const Yellow = "#f0b341";

export const HeaderWrapper = styled.div`
  position: fixed;
  max-width: 100%;
  width: 100%;
  height: 80px;
  top: 0;
  right: 0;
  max-height: 80px;
  background-color: ${SecondaryColor};
  box-shadow: rgba(0, 0, 0, 0.27) 0px 2px 3px 2px;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  ul {
    display: flex;
    list-style: none;
    li {
      margin: 0 20px;
      a {
        text-decoration: none;
        color: ${FadeWhite};
        cursor: pointer;
        span {
          padding: 0 20px;
        }
      }
    }
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Login = styled.div`
  width: 90px;
  height: 40px;
  border-radius: 50px;
  background-color: ${MainColor};
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  padding: 0 8px;
  cursor: pointer;
  img {
    height: 25px;
    object-fit: contain;
    pointer-events: none;
  }
  span {
    font-family: Helvetica;
    color: ${Yellow};
    pointer-events: none;
  }
`;

export const Register = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: ${FadeWhite};
  margin: 0 5px;
  font-family: "irsans";
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px 0px;
  cursor: pointer;
  &:hover {
    color: ${White};
  }
  svg {
    font-size: 2rem;
    pointer-events: none;
  }
`;

export const UserProfileMenu = styled.div`
  animation: 200ms ${EventModal} ease-in-out;
  position: fixed;
  z-index: 99999;
  top: 65px;
  left: 30px;
  width: 250px;
  max-width: 95%;
  padding: 2px 8px;
  height: 500px;
  background-color: ${White};
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px 0px;
  border-radius: 5px;
`;
