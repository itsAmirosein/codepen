import styled, { css } from "styled-components/macro";

const MainColor = "#0f1724";
const SecondaryColor = "#1d2636";
const White = "#ffffff";
const FadeWhite = "#ccc";
const Red = "#a71753";
const Yellow = "#f0b341";

const ParentPattern = css`
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px 0px;
  border-radius: 5px;
`;

const Row = css`
  width: 100%;
  height: 70px;
  background-color: ${SecondaryColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${FadeWhite};
`;

const PostButton = css`
  padding: 0 8px;
  height: 35px;
  background-color: ${MainColor};
  color: ${FadeWhite};
  ${ParentPattern};
  border: none;
  outline: none;
  font-family: "irsans";
  cursor: pointer;
`;

export const PostPreviewHeader = styled.div`
  ${Row};
`;
export const PostPreviewAuthor = styled.div`
  ${Row};
`;

export const ShowProfile = styled.button`
  ${PostButton};
`;

export const ShowInEditor = styled.button`
  ${PostButton};
`;

export const PostPreviewDetail = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  color: ${FadeWhite};
  background-color: ${SecondaryColor};
  ${ParentPattern};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const PostPreviewChart = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 600px;
  height: 370px;
  max-width: 100%;
  margin-bottom: 20px;
  border-radius: 5px;
  overflow: hidden;
  img {
    background: ${MainColor};
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  > div {
    position: absolute;
    left: 47%;
    top: 45%;
  }
`;

export const PostPreviewInfo = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${ParentPattern};
  background-color: ${MainColor};
  margin-top: 20px;
  padding: 0 10px;
`;

export const PostInfo = styled.div`
  position: relative;
  width: 450px;
  height: 370px;
  background-color: ${MainColor};
  ${ParentPattern};
  padding: 10px 25px;
  margin-bottom: 20px;
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
  }
`;
export const TechnoFeedback = styled.div`
  height: 200px;
  border-radius: 3px;
  > div {
    height: 100%;
    padding: 2px 10px;
  }
`;

export const TechnoSummary = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: brown;
  align-items: flex-end;
  width: 40%;
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`;
export const FeedbackSummary = styled.div`
  width: 60%;
`;

export const ChartWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-color: ${MainColor};
  ${ParentPattern};
  margin: 20px 0;
  padding: 10px;
`;

export const Comment = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 1px solid rgba(39, 55, 82, 0.8);
  margin: 5px 0;
`;

export const CommentAvatar = styled.div`
  width: 70px;
  height: 100%;
  padding: 10px;
  img {
    object-fit: contain;
    min-width:50px;
    min-height: 50px;
    background-color:${MainColor};
    border-radius: 50%;
  }
`;

const CommentBtn = css`
  border: none;
  outline: none;
  font-size: 0.9rem;
  padding: 2px 5px;

  color: ${FadeWhite};
  font-family: "irsans";
  border-radius: 3px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${White};
  }
`;
export const CommentBody = styled.div`
  width: calc(100% - 70px);
  height: auto;
  display: flex;
  padding: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  > span {
    font-size: 0.9rem;
  }
  p {
    height: auto;
    text-align: justify;
    font-size: 0.95rem;
  }
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > span {
      font-size: 0.8rem;
    }
    > button {
      ${CommentBtn};
      background-color: ${MainColor};
      svg {
        margin-right: 3px;
        font-size: 1.1rem;
        pointer-events: none;
      }
    }
  }
`;

export const CommentHeader = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${MainColor};
  padding: 2px 10px;
  display: flex;
  justify-content: space-between;
  ${ParentPattern};
  align-items: center;
  margin:20px 0;
  button {
    ${CommentBtn};
    background-color: ${Red};
  }
`;
