import styled, {keyframes } from "styled-components/macro";
import Modal from "@material-ui/core/Modal";
import {fadeIn, merge } from "react-animations";
const eventModal = merge(fadeIn);
const EventModal = keyframes`${eventModal}`;

const MainColor = "#0f1724";
const SecondaryColor = "#1d2636";
const White = "#ffffff";
const FadeWhite = "#ccc";

export const CommentModal = styled(Modal)`
  animation: 400ms ${EventModal};
  max-width: 95%;
  display: flex;
  width: 600px;
  margin: auto;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  z-index: 999;
`;
export const FadeModal = styled.div`
  background-color: ${SecondaryColor};
  border: none !important;
  outline: none !important;
  width: 600px;
  max-width: 100%;
  max-height: 800px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
`;
export const ContentModal = styled.div`
  overflow-y: auto;
  height: 680px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContentImgWrapper = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
  background-color: ${SecondaryColor};
  background-position: center;
  background-size: cover;
  cursor: pointer;
  &:hover {
    button {
      opacity: 0.5;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
export const OpenInEditorButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  color: ${FadeWhite};
  font-size: 1.85rem;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  opacity: 0;
`;
export const ContentInfoWrapper = styled.div`
  height: 380px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CommentDetail = styled.div`
  width: 100%;
  height: 100px;
`;
export const CommentTextarea = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextInput = styled.textarea`
  width: 90%;
  height: 250px;
  resize: none;
  border: none;
  outline: none;
  background-color: ${MainColor};
  padding: 5px 8px;
  font-size: 0.85rem;
  font-family: "irsans";
  color: ${FadeWhite};
  border-radius: 3px;
`;
export const HeaderModal = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${MainColor};
  color: ${FadeWhite};
  padding: 0 8px;
  overflow: hidden;
  white-space: nowrap;
`;
export const FooterModal = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${MainColor};
  color: ${FadeWhite};
  padding: 0 8px;
`;

export const SubmitButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
export const CallIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  svg {
    font-size: 1.3rem;
    margin-left: 10px;
    color: ${FadeWhite};
  }
`;

export const SubmitButton = styled.button`
  background-color: ${SecondaryColor};
  cursor: pointer;
  color: ${FadeWhite};
  border-radius: 2px;
  margin-right: 10px;
  font-family: "irsans";
  border: none;
  outline: none;
  width: 90px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 1px;
    color: ${White};
  }
`;

export const CommentAuthorDetail = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${FadeWhite};
  border-bottom: 1px solid rgba(39, 55, 82, 0.4);
`;
export const CommentPostDetail = styled.div`
  width: 100%;
  height: 30px;
  padding: 0 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${FadeWhite};
  border-bottom: 1px solid rgba(39, 55, 82, 0.4);
  > span {
    font-size: 0.8rem;
  }
`;
export const AuthorName = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    margin-left: 8px;
    border-radius: 50%;
    min-width: 50px;
    min-height: 50px;
    object-fit: contain;
    object-position: center;
  }
  > span {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
`;
export const CommentAuthorLevel = styled.span`
  font-size: 0.8rem;
`;
export const AuthorSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    margin:0 10px;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${FadeWhite};
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${White};
    }
  }
`;
export const Medal = styled.div`
  background: url("./images/medal.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
`;
