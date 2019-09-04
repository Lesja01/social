import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        className={s.logo}
        src="https://www.sccpre.cat/png/big/3/35596_social-media-logos-png.png"
      ></img>
    </header>
  );
};
export default Header;
