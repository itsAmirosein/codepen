import React from "react";
import * as sc from "./styles/event-modal";
import * as md from "react-icons/md";

export const LikeEvent = () => {
  return (
    <sc.EventWrapper>
      <span> 18 نفر پست شما را پسندیده اند.</span>
      <sc.Timer>12 دقیقه پیش</sc.Timer>
      <md.MdReply />
    </sc.EventWrapper>
  );
};

export const CommentEvent = () => {
  return (
    <sc.EventWrapper>
      <span>4 نفر به پست شما نظر داده اند.</span>
      <sc.Timer>5 دقیقه پیش</sc.Timer>
      <md.MdReply />
    </sc.EventWrapper>
  );
};
export const ViewEvent = () => {
  return (
    <sc.EventWrapper>
      <span>142 نفر پست شما را دیده اند.</span>
      <sc.Timer>3 ساعت پیش</sc.Timer>
      <md.MdReply />
    </sc.EventWrapper>
  );
};
export const FollowEvent = () => {
  return (
    <sc.EventWrapper>
      <span>6 نفر شما را دنبال کرده اند.</span>
      <sc.Timer>2 ساعت پیش</sc.Timer>
      <md.MdReply />
    </sc.EventWrapper>
  );
};

export const LevelEvent = () => {
    return (
      <sc.EventWrapper>
        <span>شما به سطح حرفه‌ای ارتقا پیدا کردید.</span>
        <sc.Timer>2 ساعت پیش</sc.Timer>
        <md.MdReply />
      </sc.EventWrapper>
    );
  };
  export const ShareEvent = () => {
    return (
      <sc.EventWrapper>
        <span>3 نفر پست شما را به اشتراک گذاشته اند.</span>
        <sc.Timer>4 ساعت پیش</sc.Timer>
        <md.MdReply />
      </sc.EventWrapper>
    );
  };
  
  export const MemberEvent = () => {
    return (
      <sc.EventWrapper>
        <span>اشتراک 3 ماهه با موفقیت فعال شد.</span>
        <sc.Timer>2 ساعت پیش</sc.Timer>
        <md.MdReply />
      </sc.EventWrapper>
    );
  };
  
  