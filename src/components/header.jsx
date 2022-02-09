import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../userContext";
const Header = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="header_container">
      <div className="header_left">
        <Link to="/">
          <span>NC Games</span>
        </Link>
      </div>
      <div className="header_middle">
        <div className="searchbar">
          {/* <SearchIcon className="searchIcon" /> */}
          <input placeholder="search reviews..." />
        </div>
      </div>
      <div className="header_right">
        {user.username ? (
          <div className="logginInfo">
            <img className="avatarurl" src={user.avatar_url} />
            <p>Logged in as: {user.username}</p>
          </div>
        ) : (
          <button
            className="loginbutton"
            onClick={() => {
              setUser({
                username: "grumpy19",
                name: "Paul Grump",
                avatar_url:
                  "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013",
              });
            }}
          >
            Log in
          </button>
        )}
      </div>
    </div>
  );
};
export default Header;
