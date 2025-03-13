import { useEffect, useState } from "react";
import { Hero } from "../Components/Hero";
import Movie from "../Components/MovieItem";
import { Separator } from "../Components/Separator";
import { MoviesRepository } from "../Repositories/MoviesRepository";
import { TTMDBApiResponse } from "../Types/TTMDBApiResponse";

const moviesRepository = new MoviesRepository();

export const HomePage = () => {
  const [featuredMovies, setFeaturedMovies] = useState<TTMDBApiResponse>();

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await moviesRepository.getFeaturedMovies();

      setFeaturedMovies(movies);
    };

    fetchMovies();
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:flex-col lg:min-h-screen">
      <div className="mx-auto max-w-3xl text-center">
        <Hero />
        <Separator text="Filmes em Destaque" />
      </div>

      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3 min-h-96">
        {featuredMovies &&
          featuredMovies.results.map((movie) => {
            return <Movie key={movie.id} details={movie} />;
          })}
      </div>
    </div>
  );
};
