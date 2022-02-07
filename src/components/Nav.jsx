import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ categories }) => {
  return (
    <nav className="nav">
      {categories.map((category) => {
        return (
          <Link key={category.slug} to={`/reviews/${category.slug}`}>
            {category.slug}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
