import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./pages/Movie";
import Home from "./pages/Home";
import Login from "./pages/Login";
import WatchList from "./pages/WatchList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie" element={<Movie />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/watchlist" element={<WatchList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
