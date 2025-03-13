import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header.tsx";
import { HomePage } from "./Pages/HomePage.tsx";
import { TopRatedMovies } from "./Pages/TopMovies.tsx";
import { MoviePage } from "./Pages/MoviePage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-gradient-to-b from-gray-950 to-gray-900">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/filmes-populares" element={<TopRatedMovies />} />
          <Route path="/filme/:movieId" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  </StrictMode>
);
