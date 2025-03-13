import { TMovie } from "../Types/TMovie";

export default function Movie({ details }: { details: TMovie }) {
  return (
    <a
      href={`/filme/${details.id}`}
      className="relative block overflow-hidden rounded-lg p-4 sm:p-6 lg:p-8 bg-neutral-100 hover:scale-105 transition-transform"
    >
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-slate-700 to-slate-800"></span>

      <div className="flex">
        <div className="hiddensm:block sm:shrink-0 -ml-4 lg:-ml-8 -my-4 lg:-my-8">
          <img
            alt=""
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${details.poster_path}`}
            className="h-full w-48 rounded-l object-cover shadow-sm"
          />
        </div>

        <div className="pl-4">
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            {details.title}
          </h3>

          <p className="mt-4 text-pretty text-sm text-gray-500 line-clamp-6">
            {details.overview}
          </p>
        </div>
      </div>
    </a>
  );
}
