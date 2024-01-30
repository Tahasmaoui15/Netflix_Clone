import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-history-32.png"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar"
      />
    </div>
  );
}

export default Nav;
