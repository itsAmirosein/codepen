import React, { useEffect } from "react";
import { HeaderWrapper, Login, Register, BtnContainer } from "./styles/header";
import { HEADER_LINKS } from "./data/HeaderLinks";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import ReactDOM from "react-dom";
import ProfileMenu from "./ProfileMenu";
import { useState } from "react";

export default function Header() {
  const [userProfile, setUserProfile] = useState(false);

  const handleCloseMenu = () => {
    setUserProfile(false);
  };
  const handleOpenMenu = (e) => {
    e.stopPropagation();
    setUserProfile(!userProfile);
  };
  useEffect(() => {
    window.addEventListener("click", handleCloseMenu);
    return () => window.removeEventListener("click", handleCloseMenu);
  }, []);

  return (
    <>
      <HeaderWrapper>
        <ul>
          {HEADER_LINKS.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.url}>لینک</Link>
              </li>
            );
          })}
        </ul>
        <BtnContainer>
          <Login>
            <img src="/images/trophy.svg" alt="trophy" />
            <span>24h</span>
          </Login>
          <Register onClick={handleOpenMenu}>
            <FaUserCircle />
          </Register>
        </BtnContainer>
      </HeaderWrapper>
      {userProfile && ReactDOM.createPortal(<ProfileMenu />, document.body)}
    </>
  );
}
