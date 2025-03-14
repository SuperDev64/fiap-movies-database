import { Hero } from "@/src/Components/Hero";
import Movie from "@/src/Components/MovieItem";
import { Separator } from "@/src/Components/Separator";
import { MoviesRepository } from "@/src/Repositories/MoviesRepository";

const moviesRepository = new MoviesRepository();

export default async function Home() {
  const movies = await moviesRepository.getFeaturedMovies();

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:flex-col lg:min-h-screen">
      <div className="mx-auto max-w-3xl text-center">
        <Hero />
        <Separator text="Filmes em Destaque" />
      </div>

      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3 min-h-96">
        {movies &&
          movies.results.map((movie) => {
            return <Movie key={movie.id} details={movie} />;
          })}
      </div>
    </div>
  );
}
