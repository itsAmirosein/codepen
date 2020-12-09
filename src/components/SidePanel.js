import React, { useEffect } from "react";
import * as sc from "./styles/side-panel";
import { MdKeyboardReturn, MdNotificationsOff } from "react-icons/md";
import { FaCrown } from "react-icons/fa";
import EventModal from "./EventModal";
import ReactDOM from "react-dom";
import { useState } from "react";
import { LINKS } from "./data/PanelLinks";
import { useLocation } from "react-router-dom";

const { userLinks, publicLinks } = LINKS;

export default function SidePanel() {
  const [event, setEvent] = useState(false);
  const location = useLocation();
  const path = location.pathname.substr(1);

  const openEventModal = (e) => {
    e.stopPropagation();
    setEvent(!event);
  };

  const closeEventModal = (e) => {
    e.preventDefault();
    setEvent(false);
  };

  useEffect(() => {
    window.addEventListener("click", closeEventModal);
    return () => window.removeEventListener("click", closeEventModal);
  }, []);


  return (
    <sc.SidePanelWrapper>
      <sc.UserPanel>
        <span> داشبورد</span>
        <sc.Events onClick={openEventModal}>
          <MdKeyboardReturn /> 10 اتفاق جدید <MdNotificationsOff />
        </sc.Events>
        <span>
          <FaCrown />
          سطح شما: حرفه‌ای
        </span>
        {userLinks.map((link) => {
          return (
            <sc.PanelLink key={link.id} to={`/${link.url}`} active={link.url === path ? "active" : ""}>
              {link.icon} {link.name}
            </sc.PanelLink>
          );
        })}
      </sc.UserPanel>
      <sc.Award>
        {publicLinks.map((link) => {
          return (
            <sc.PanelLink
              key={link.id}
              to={`/${link.url}`}
              active={link.url === path ? "active" : ""}
            >
              {link.icon} {link.name}
            </sc.PanelLink>
          );
        })}
      </sc.Award>
      {event && ReactDOM.createPortal(<EventModal />, document.body)}
    </sc.SidePanelWrapper>
  );
}
