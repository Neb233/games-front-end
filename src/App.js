import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserContext } from "./contexts/userContext";

import Header from "./components/header/header";
import { getCategories } from "./utils/api";
import NavBar from "./components/Nav/Nav";
import SingleReview from "./components/single_review/single_review";
import ReviewList from "./components/review_list/review_list";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <NavBar categories={categories} setCategories={setCategories} />

          <Routes>
            <Route path="/" element={<ReviewList />}></Route>
            <Route path="/reviews" element={<ReviewList />}>
              {" "}
            </Route>
            <Route
              path="/reviews/:review_id"
              element={<SingleReview />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
