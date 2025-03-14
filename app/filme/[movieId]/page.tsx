import Hero from "@/src/Components/MoviePage/Hero";
import Buttons from "@/src/Components/MoviePage/Buttons";
import Genres from "@/src/Components/MoviePage/Genres";
import MovieDetails from "@/src/Components/MoviePage/MovieDetails";
import { MoviesRepository } from "@/src/Repositories/MoviesRepository";

type PageProps = {
  params: Promise<{ movieId: string }>;
};

const movieRepository = new MoviesRepository();

export default async function Page({ params }: PageProps) {
  const { movieId } = await params;
  const movie = await movieRepository.getMovie(movieId);

  return (
    <div className="min-h-screen">
      <Hero
        url={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
      />

      <div className="-mt-64 relative z-10 mx-auto max-w-screen-xl px-4">
        <div className="flex gap-8 mb-16">
          <div className="shrink-0">
            <img
              alt={movie.title}
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
              className="max-w-full rounded-l object-cover shadow-sm rounded"
              width={240}
              height={360}
            />
          </div>

          <div className="text-white pt-16">
            <h1 className="text-5xl font-medium">
              {movie.title}
              <span className="text-4xl text-neutral-200 font-light">
                {" "}
                ({movie.release_date.slice(0, 4)})
              </span>
            </h1>

            <p className="text-xl mt-6 min-h-7">{movie.tagline}</p>

            <div className="flex gap-4 mt-6 font-bold min-h-14">
              <Buttons movieId={movie.id} />
            </div>

            <div className="flex mt-14 gap-4">
              <Genres genres={movie.genres} />
            </div>
          </div>
        </div>

        <MovieDetails movie={movie} />
      </div>
    </div>
  );
}
