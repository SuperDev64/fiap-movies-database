interface IGenres {
  name: string
}

export default function Genres({genres}: { genres: IGenres[] }) {
  return (
    genres.map((genre, index) => {
      return (
          <p
              key={index}
              className="whitespace-nowrap rounded-full border border-neutral-500 px-4 py-1 text-sm text-neutral-200"
          >
            {genre.name}
          </p>
      )
    })
  )
}