import React from "react";
import * as sc from "./styles/event-modal";
import { FaTimes } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import * as ev from "./EventItem";

export default function EventModal() {
  return (
    <sc.EventModalWrapper onClick={e => e.stopPropagation()}>
      <sc.EventModalHeader>
        <span>اتفاقات اخیر</span>
        <FaTimes />
      </sc.EventModalHeader>
      <sc.EventModalBody>
        <ev.LikeEvent />
        <ev.CommentEvent />
        <ev.ViewEvent />
        <ev.LevelEvent />
        <ev.FollowEvent />
        <ev.MemberEvent />
        <ev.ShareEvent />
      </sc.EventModalBody>
      <sc.EventModalFooter>
        <MdClear />
        <span>پاک کردن همه</span>
      </sc.EventModalFooter>
    </sc.EventModalWrapper>
  );
}
