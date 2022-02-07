import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/home";
import Header from "./components/header";
import { getReviews, getCategories } from "./utils/api";
import NavBar from "./components/Nav";
import { useParams } from "react-router-dom";

function App() {
  const [reviews, setReviews] = useState([]);
  const [categories, setCategories] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    console.log(category);
    getReviews(category).then((reviews) => {
      setReviews(reviews);
    });
  }, [category]);
  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });
  });
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar categories={categories} setCategories={setCategories} />
        <Routes>
          <Route
            path="/"
            element={<Home reviews={reviews} setReviews={setReviews} />}
          ></Route>
          <Route
            path="/reviews/:category"
            element={<Home reviews={reviews} setReviews={setReviews} />}
          >
            {" "}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
