import React, { useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import * as sc from "./styles/comment-modal";
import { BsPersonDashFill, BsPersonPlusFill } from "react-icons/bs";
import * as md from "react-icons/md";
import * as fa from "react-icons/fa";
import _ from "lodash";

export default function Comment({ comment, title, author }) {
  const [text, setText] = useState("");
  return (
    <sc.CommentModal
      open={comment}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 600,
      }}
    >
      <sc.FadeModal onClick={(e) => e.stopPropagation()}>
        <sc.HeaderModal>
          ارسال نظر برای{" "}
          {_.truncate(title, {
            length: 65,
            omission: "...",
          })}
        </sc.HeaderModal>
        <sc.ContentModal>
          <sc.ContentImgWrapper>
            <sc.OpenInEditorButton>
              <md.MdOpenInNew />
            </sc.OpenInEditorButton>
            <img src="https://www.unsplash.it/600/300" alt="code" />
          </sc.ContentImgWrapper>
          <sc.ContentInfoWrapper>
            <sc.CommentDetail>
              <sc.CommentAuthorDetail>
                <sc.AuthorName>
                  <img src="https://www.unsplash.it/50/50" alt="author" />
                  <span>
                    <span>{author}</span>
                    <sc.CommentAuthorLevel>سطح: حرفه‌ای</sc.CommentAuthorLevel>
                  </span>
                </sc.AuthorName>
                <sc.AuthorSocial>
                  <fa.FaInstagram />
                  <fa.FaLinkedin />
                  <fa.FaTwitter />
                </sc.AuthorSocial>
              </sc.CommentAuthorDetail>
            </sc.CommentDetail>
            <sc.CommentTextarea>
              <sc.TextInput
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="نظر خود را بنویسید"
              />
            </sc.CommentTextarea>
          </sc.ContentInfoWrapper>
        </sc.ContentModal>
        <sc.FooterModal>
          <sc.CallIcons>
            <BsPersonPlusFill />
            <md.MdShare />
          </sc.CallIcons>
          <sc.SubmitButtons>
            <sc.SubmitButton>ارسال نظر</sc.SubmitButton>
          </sc.SubmitButtons>
        </sc.FooterModal>
      </sc.FadeModal>
    </sc.CommentModal>
  );
}
