import React from "react";
import { Link } from "react-router-dom";
import "../Nav/Nav.css";
import Button from "react-bootstrap/Button";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const NavBar = ({ categories }) => {
  return (
    <nav className="categorynav">
      {categories.map((category) => {
        return (
          <Link key={category.slug} to={`/reviews?category=${category.slug}`}>
            <Button className="categorynav" size="sm" active>
              {category.slug}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
