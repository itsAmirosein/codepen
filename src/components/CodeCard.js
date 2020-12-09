import React, { useState } from "react";
import * as sc from "./styles/content";
import * as fa from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";
import { useEffect } from "react";
import _ from "lodash";
import CardPopover from "./CardPopover";
import Comment from "./Comment";
import { Portal } from "react-portal";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
export default function CodeCard({
  props,
  handleLikeClick,
  handlePopover,
  matchId,
  handleComment,
}) {
  const [dir, setDir] = useState("rtl");
  const [isOverAuthor, setIsOverAuthor] = useState(false);
  const [liked, setLiked] = useState(false);
  const [pop, setPop] = useState(false);
  const [comment, setComment] = useState(false);
  const {
    title,
    author,
    likes,
    comments,
    views,
    img,
    id,
    isSpecial,
    date,
  } = props;

  useEffect(() => {
    const rtlChars = "[\u0600-\u06FF]";
    const reRTL = new RegExp(rtlChars);
    if (reRTL.test(title)) {
      setDir("rtl");
    } else {
      setDir("ltr");
    }
  }, [title]);

  const handleIsLike = () => {
    setLiked(!liked);
    handleLikeClick(id, liked);
  };
  const handlePopoverOpen = (e) => {
    e.stopPropagation();
    handlePopover();
    setPop(true);
    setComment(false);
  };

  const closePop = () => {
    setPop(false);
    setComment(false);
  };

  useEffect(() => {
    window.addEventListener("click", closePop);
    return () => window.removeEventListener("click", closePop);
  }, []);

  const handleLeaveComment = (e) => {
    e.stopPropagation();
    handleComment();
    setComment(true);
    setPop(false);
  };

  return (
    <sc.Card isSpecial={isSpecial}>
      <Link to={`/post/${id}`}>
        <sc.CardImg src={`https://www.unsplash.it/400/300/?${id}`} />
      </Link>
      <sc.Expand>
        <MdZoomOutMap />
      </sc.Expand>
      <sc.AuthorInfo>
        <sc.Avatar src={`https://www.unsplash.it/50/50/?${id}`} />
        <sc.TitleWrapper>
          <sc.Text dir={dir}>
            {_.truncate(title, {
              length: 65,
              omission: "...",
            })}
          </sc.Text>
          <sc.Label isOverAuthor={isOverAuthor}>
            <span
              onMouseOver={() => setIsOverAuthor(true)}
              onMouseLeave={() => setIsOverAuthor(false)}
            >
              {author}
            </span>
            <span>حرفه‌ای</span>
            {isSpecial && <span>اشتراک ویژه</span>}
            <fa.FaShare />
          </sc.Label>
        </sc.TitleWrapper>
        <fa.FaEllipsisV onClick={handlePopoverOpen} />
      </sc.AuthorInfo>

      <sc.CardDetail>
        <sc.PublishDate>{date}</sc.PublishDate>
        <sc.DetailWrapper liked={liked}>
          <div>
            <span>{views}</span>
            <fa.FaEye />
          </div>
          <div onClick={handleLeaveComment}>
            <span>{comments}</span>
            <fa.FaComment />
          </div>
          <div onClick={handleIsLike}>
            <span>{likes}</span>
            <fa.FaHeart />
          </div>
        </sc.DetailWrapper>
      </sc.CardDetail>
      {matchId === id && pop && <CardPopover title={title} />}
      {comment && matchId === id && (
        <Portal>
          <Comment title={title} author={author} comment={comment} />
        </Portal>
      )}
    </sc.Card>
  );
}
