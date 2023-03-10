import Link from "next/link";


import React, { useState } from "react";

import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Events", href: "/events" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"} legacyBehavior>
          <a>
            <h1 className="logo">My News App</h1>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
      <style jsx>{`
      a{
  text-decoration: none;
  color: inherit;
}
header{
  position: sticky;
  z-index: 30;
  top: 0;
}
nav{
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  background-color: #f1f1f1;
}
.nav__menu-bar{
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  cursor: pointer;
}
.nav__menu-bar div{
  width: 40px;
  height: 4px;
  background-color: black;
  border-radius: 2px;
}
.nav__menu-list{
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 60px;
  width: 288px;
  row-gap: 24px;
  right: -288px;
  padding: 24px 16px;
  transition: all 0.2s;
  min-height: calc(100vh - 60px);
  background-color: #f1f1f1;
}
.nav__menu-list.active{
  right: 0;
}
.nav__link{
  font-size: 18px; 
  position: relative;
  transition: all 0.2s;
}

.nav__link:hover{
 font-weight: bold;
}

.center{
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (min-width: 768px) {
  .nav__menu-bar{
    display: none;
  }
  .nav__menu-list{
    position: unset;
    flex-direction: row;
    min-height: fit-content;
    width: fit-content;
    column-gap: 24px;
    align-items: center;
  }
  .nav__link::before{
    content: '';
    position: absolute;
    width: 0%;
    height: 6px;
    bottom: -16px;
    left: 0;
    background-color: black;
    transition: all 0.2s;
  }
  
  .nav__link:hover:before{
   width: 100%;
  }
}
      `}</style>
    </header>
    
  );
};

export default Navbar;