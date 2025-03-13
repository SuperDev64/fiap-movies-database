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

      {showSearch && (
        <div className="flex gap-8 mt-12">
          <input
            type="text"
            className="grow rounded-lg border-gray-200 p-4 pe-12 sm:text-lg/relaxed shadow-sm bg-white"
            placeholder="Buscar um filme"
          />
        </div>
      )}
    </>
  );
};
