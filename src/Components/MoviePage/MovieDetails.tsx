interface IMovieDetails {
  overview: string;
  spoken_languages: {
    name: string
  }[];
  release_date: string;
  revenue: number;
}

export default function MovieDetails({movie}: {movie: IMovieDetails}) {
  return (
      <div className="max-w-screen-lg mx-auto text-lg text-white">
        <p className="mb-12">{movie.overview}</p>

        <div
            className="grid grid-cols-3 divide-x text-center font-bold leading-6 rounded-lg  overflow-hidden divide-slate-800 border border-slate-800 p-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Idioma original</h3>
            <p>{movie.spoken_languages[0].name}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Data de Lançamento</h3>
            <p>{movie.release_date.split("-").reverse().join("/")}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Receita</h3>
            <p>{movie.revenue.toLocaleString("pt-BR", {style: "currency", currency: "USD"})}</p>
          </div>
        </div>
      </div>
  )
}