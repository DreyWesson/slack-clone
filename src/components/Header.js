import { Avatar } from "@material-ui/core";
import { AccessTime, HelpOutline, Search } from "@material-ui/icons";
import React from "react";
import { useStateValue } from "../StateProvider";
import "./Header.css";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTime />
      </div>
      <div className="header__search">
        <Search />
        <input type="text" placeholder="Search slack..." />
      </div>
      <div className="header__right">
        <HelpOutline />
      </div>
    </div>
  );
}
// alt={user?.displayName}
// src={user?.photoURL}
export default Header;
