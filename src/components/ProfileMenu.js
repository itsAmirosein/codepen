import React from "react";
import * as sc from "./styles/header";

export default function ProfileMenu() {
  return (
    <sc.UserProfileMenu onClick={(e) => e.stopPropagation()}>
      user
    </sc.UserProfileMenu>
  );
}
