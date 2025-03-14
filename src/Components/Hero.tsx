import SearchForm from "./SearchForm";

export const Hero = ({
  showSearch = true,
  title = "Encontre seu próximo filme favorito",
  description = "Use o campo de busca abaixo e salve seus filmes para assistir depois!",
}) => {
  return (
    <>
      <h1 className="bg-gradient-to-r from-slate-300 to-slate-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-6xl">
        {title}
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-neutral-100">
        {description}
      </p>

      {showSearch && <SearchForm />}
    </>
  );
};
