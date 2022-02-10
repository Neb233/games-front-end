import React from "react";
import { Link } from "react-router-dom";
import "../Nav/Nav.css";

const NavBar = ({ categories }) => {
  const newCategories = categories.map((category) => {
    return { ...category };
  });

  // const capitalizedCategories = newCategories.map((category) => {
  //   return category.replace(/\w\S*/g, (w) =>
  //     w.replace(/^\w/, (c) => c.toUpperCase())
  //   );
  // });
  // console.log(capitalizedCategories);
  return (
    <nav className="nav">
      {categories.map((category) => {
        return (
          <Link key={category.slug} to={`/reviews?category=${category.slug}`}>
            <h4 className="category">{category.slug} </h4>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;