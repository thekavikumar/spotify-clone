import React from "react";
import "./Header.css";
import Search from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { DataLayerValue } from "./DataLayer";

function Header({ spotify }) {
  const [{ user }, dispatch] = DataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <Search color="black" />
        <input
          type="text"
          placeholder="Search for Artists, Songs, or Playlists"
        />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
