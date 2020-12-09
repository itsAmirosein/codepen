import styled, { css, keyframes } from "styled-components/macro";
import { zoomIn, merge } from "react-animations";

const MainColor = "#0f1724";
const SecondaryColor = "#1d2636";
const White = "#ffffff";
const FadeWhite = "#ccc";
const Red = "#a71753";
const Yellow = "#f0b341";

const zoomSlide = merge(zoomIn);
const ZoomSlide = keyframes`${zoomSlide}`;

const flexLayout = css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ParentPattern = css`
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px 0px;
  border-radius: 5px;
`;

const SortButtons = css`
  padding: 5px 11px;
  color: ${White};
  border-radius: 50px;
  cursor: pointer;
  margin: 6px 20px 6px 0;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 1px;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: calc(100% - 300px);
  max-width: 100%;
  height: auto;
  margin: 105px 275px 50px 0;
`;

export const InputSearchWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  > svg {
    position: absolute;
    z-index: 4;
    left: 13px;
    font-size: 1.6rem;
    top: 10px;
    cursor: pointer;
    color: ${FadeWhite};
    transition: all 0.3s ease-in-out;
    &:hover {
      color: ${White};
    }
  }
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 46px;
  border: none;
  outline: none;
  background-color: ${SecondaryColor};
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px 0px;
  border-radius: 50px;
  font-size: 0.92rem;
  padding: 0 15px 0 50px;
  font-family: irsans;
  color: ${White};
  z-index: 2;
`;

export const PopularSearchWrapper = styled.div`
  ${flexLayout}
  width: 100%;
  margin-top: -23px;
  z-index: 1;
  height: ${(props) => (props.suggested.length === 0 ? 0 : "130px")};

  overflow: hidden;
  background-color: ${SecondaryColor};
  padding: 20px 20px 0 20px;
  color: ${White};
  flex-direction: column;
  transition: all 0.5s ease;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  h4 {
    opacity: ${(props) => (props.suggested.length === 0 ? 0 : 1)};
    margin-top: 30px;
    line-height: 0;
    font-size: 0.8rem;
    font-weight: 400;
    color: ${FadeWhite};
  }
`;

export const PopularTagsWrapper = styled.div`
  width: 100%;
  ${flexLayout};
  flex-wrap: wrap;
  text-align: right;
`;

export const Tag = styled.div`
  background-color: ${MainColor};
  padding: 4px 10px;
  margin: 10px 0 0 15px;
  border-radius: 50px;
  font-size: 0.9rem;
  color: ${FadeWhite};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${White};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 1px;
  }
`;

export const MainWrapper = styled.div`
  width: 100%;
  ${flexLayout}
  margin: 20px 0;
  flex-basis: 0;
`;

export const CardsWrapper = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0;
  gap: 20px 35px;
`;

export const Card = styled.div`
  position: relative;
  width: 510px;
  height: 350px;
  background-color: ${SecondaryColor};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px 2px;
  margin: 0 0px 50px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  transition: box-shadow 0.3s ease-in-out;
  a{
    width:100%;
    height:250px;
  }
    &::after {
    content: "";
    transition: all 0.3s ease-in-out;
    position: absolute;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    right: 0;
    bottom: 0;
    opacity: 0;
    background-color: ${(props) => (props.isSpecial ? Red : Yellow)};
    z-index: -1;
    border-radius: 5px;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px 1px;
    > button {
      opacity: 1;
    }
    &::after {
      width: 100% !important;
      height: 100% !important;
      right: -10px !important;
      bottom: -10px !important;
      opacity: 1 !important;
    }
  }
  @media (max-width: 1920px) {
    /* width: 450px; */
  }
  @media (max-width: 1380px) {
    width: 600px;
  }

`;

export const CardImg = styled.img`
  background-color: ${MainColor};
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  margin: 0;
  cursor: pointer;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const AuthorInfo = styled.div`
  position: relative;
  height: 70px;
  width: 100%;
  display: flex;
  overflow: hidden;
  justify-content: flex-start;

  align-items: center;
  padding: 2px 10px;
  > svg {
    position: absolute;
    left: 5px;
    bottom: 20px;
    color: #ccc;
    font-size: 1.1rem;
    cursor: pointer;
  }
`;
export const Avatar = styled.img`
  background-color: ${MainColor};
  border-radius: 50%;
  object-fit: contain;
  object-position: center;
  min-width: 50px;
  min-height: 50px;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  ${flexLayout}
  flex-direction: column;
  direction: rtl;
  margin: 0 10px;
  overflow: hidden;
`;

export const Text = styled.div`
  margin: 0px 0px 5px;
  font-size: 0.9rem;
  white-space: nowrap;
  width: 90%;
  font-weight: 500;
  color: ${White};
  direction: ${(props) => (props.dir === "rtl" ? "rtl" : "ltr")};

  word-wrap: none;
  display: flex;
`;

export const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    &:first-child {
      font-size: 0.82rem;
      color: ${FadeWhite};
      cursor: pointer;
      direction: rtl;
    }
    &:nth-child(2) {
      margin-right: 10px;
      font-size: 0.72rem;
      background-color: ${Red};
      color: #f2f2f2;
      padding: 0 4px;
      border-radius: 3px;
    }
    &:nth-child(3) {
      margin-right: 10px;
      font-size: 0.72rem;
      font-weight: bold;
      background-color: ${Yellow};
      color: #000;
      padding: 0 3px;
      border-radius: 3px;
    }
  }
  > svg {
    transition: opacity 0.25s ease-in-out;
    margin-right: 10px;
    color: rgba(242, 242, 242, 0.2);
    opacity: ${(props) => (props.isOverAuthor ? 1 : 0)};
  }
`;

export const CardDetail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  overflow: hidden;
  background-color: ${SecondaryColor};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  background-color: ${SecondaryColor};

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${MainColor};
    margin: 0 5px 5px 5px;
    padding: 1px 5px;
    ${ParentPattern};
    color: ${FadeWhite};
    cursor: pointer;
    &:hover {
      color: ${White};
    }
    > span {
      margin: 3px 0 0 3px;
    }
  }
  div:nth-child(3) {
    > svg {
      color: ${(props) => (props.liked ? Red : FadeWhite)};
      transition: all 0.2s ease;
    }
    &:hover > svg {
      color: ${(props) => (props.liked ? Red : White)};
    }
  }
`;

export const PublishDate = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${FadeWhite};
  font-size: 0.7rem;
  opacity: 0.7;
`;

export const SortWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: ${SecondaryColor};
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px 0px;
  border-radius: 50px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  padding: 0 10px 0 10px;
  font-size: 0.83rem;
  color: ${FadeWhite};
  > svg {
    font-size: 1.2rem;
    color: ${FadeWhite};
    margin-left: 10px;
    opacity: 0.5;
  }
`;

export const View = styled.span`
  ${SortButtons};
  background-color: ${(props) =>
    props.isSort === "sortView" ? Red : MainColor};
`;
export const Favourite = styled.span`
  ${SortButtons};
  background-color: ${(props) =>
    props.isSort === "sortLike" ? Red : MainColor};
`;
export const Discuss = styled.span`
  ${SortButtons};
  background-color: ${(props) =>
    props.isSort === "sortComment" ? Red : MainColor};
`;
export const Date = styled.span`
  ${SortButtons};
  background-color: ${(props) =>
    props.isSort === "sortDate" ? Red : MainColor};
`;

export const onlyFree = styled.span`
  margin-right: auto;
`;
export const Expand = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${SecondaryColor};
  color: ${FadeWhite};
  padding: 2px;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 99;
  &:hover {
    opacity: 1;
    color: ${White};
  }
  ${ParentPattern};
  > svg {
    font-size: 1.5rem;
  }
`;

export const Popover = styled.div`
  animation: 250ms ${ZoomSlide} ease-in-out;
  position: absolute;
  left: 30px;
  bottom: 10px;
  width: 110px;
  height: 110px;
  font-size: 0.8rem;
  background-color: ${White};
  ${ParentPattern};
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  &::after {
    content: "";
    position: absolute;
    left: -7px;
    top: 54px;
    border: 7px solid ${White};
    border-left: 0;
    border-top-color: transparent;
    border-bottom-color: transparent;
    filter: drop-shadow(0px 0px 3px 0px rgba(0, 0, 0, 0.2));
  }
  > span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 2px 5px;
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    color: #000;
    &:hover svg {
      color: ${Red};
    }
    &:first-child {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    &:last-child {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    > svg {
      margin-left: 8px;
      font-size: 1.1rem;
      color: #5a5a5a;
    }
  }
`;
