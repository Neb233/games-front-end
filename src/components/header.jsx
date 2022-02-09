import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../userContext";
const Header = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <div>
        <Link to="/">
          <h1>NC Games</h1>
        </Link>
      </div>
      <div>
        {user.username ? (
          <>
            <img className="avatarurl" src={user.avatar_url} />
            <p>Logged in as: {user.username}</p>
          </>
        ) : (
          <button
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
    </>
  );
};
export default Header;
