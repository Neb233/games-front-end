import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/home";
import Header from "./components/header";
import { getCategories } from "./utils/api";
import NavBar from "./components/Nav";
import SingleReview from "./components/single_review";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar categories={categories} setCategories={setCategories} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/reviews" element={<Home />}>
            {" "}
          </Route>
          <Route path="/reviews/:review_id" element={<SingleReview />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
