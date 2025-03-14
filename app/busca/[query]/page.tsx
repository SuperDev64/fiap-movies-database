import { Hero } from "@/src/Components/Hero";
import Movie from "@/src/Components/MovieItem";
import { Separator } from "@/src/Components/Separator";
import { MoviesRepository } from "@/src/Repositories/MoviesRepository";

type PageProps = {
  params: Promise<{ query: string }>;
};

const movieRepository = new MoviesRepository();

export default async function SearchPage({ params }: PageProps) {
  const { query } = await params;
  const searchResults = await movieRepository.searchMovie(query);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:flex-col lg:min-h-screen">
      <Hero
        title={`Resultados da busca para ${query}`}
        description=""
        showSearch={false}
      />
      <Separator text="" />

      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3 min-h-96">
        {searchResults &&
          searchResults.results.map((movie) => {
            return <Movie key={movie.id} details={movie} />;
          })}
      </div>
    </div>
  );
}
