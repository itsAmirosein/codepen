import React, { useContext } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import context from "./context";
import * as sc from "./styles/post-preview";
import { MdReply } from "react-icons/md";
import { AuthorName, CommentAuthorLevel } from "./styles/comment-modal";
import { useState } from "react";
import { CircularProgress } from "@material-ui/core";

export default function PostPreview() {
  const { state } = useContext(context);
  const [loading, setLoading] = useState(true);
  const { filterData } = state;
  const { id } = useParams();
  const exactPost = filterData.find((post) => post.id === id);

  const handleImageLoad = (e) => {
    if (e.target.complete) {
      setLoading(false);
    }
  };

  return (
    <>
      <sc.PostPreviewDetail>
        <sc.PostPreviewHeader>
          <span>{exactPost.title}</span>
          <Link to={`/post/${id}/live`}>
            <sc.ShowInEditor>مشاهده در ویرایشگر</sc.ShowInEditor>
          </Link>
        </sc.PostPreviewHeader>
        <sc.PostPreviewChart>
          <sc.ImageWrapper>
            <img
              src="https://www.unsplash.it/600/370"
              alt="post"
              onLoad={handleImageLoad}
            />
            {loading && <CircularProgress color="secondary" />}
          </sc.ImageWrapper>

          <sc.PostInfo>
            <div>
              <span>{exactPost.author}</span>
              <button>مشاهده پروفایل</button>
            </div>
            <div>تاریخ انتشار: 1399/3/3</div>
            <sc.TechnoFeedback>
              <sc.TechnoSummary>
                <div>
                  <span>Html</span>
                  <span>24%</span>
                </div>
                <div>
                  <span>Css</span>
                  <span>36%</span>
                </div>
                <div>
                  <span>Javascript</span>
                  <span>40%</span>
                </div>
              </sc.TechnoSummary>
              <sc.FeedbackSummary>feedback</sc.FeedbackSummary>
            </sc.TechnoFeedback>
          </sc.PostInfo>
        </sc.PostPreviewChart>
        <sc.ChartWrapper>chart</sc.ChartWrapper>
        <sc.CommentHeader>
          <span>همه نظرات</span>
          <button>ارسال نظر</button>
        </sc.CommentHeader>
        {exactPost.commentDetails.length > 0
          ? exactPost.commentDetails.map((comment) => {
              return (
                <sc.Comment key={comment.id}>
                  <sc.CommentAvatar>
                    <img src="https://www.unsplash.it/50/50" alt="avatar" />
                  </sc.CommentAvatar>
                  <sc.CommentBody>
                    <span>{comment.username}</span>
                    <p>{comment.body}</p>
                    <div>
                      <span>{comment.createDate}</span>
                      <button>
                        پاسخ دادن <MdReply />
                      </button>
                    </div>
                  </sc.CommentBody>
                </sc.Comment>
              );
            })
          : "هیچ نظری برای این پست وجود ندارد."}
      </sc.PostPreviewDetail>
    </>
  );
}
