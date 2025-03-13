export const Header = () => {
  return (
    <header className="bg-gray-950 fixed top-0 z-20 left-0 right-0">
      <div className="mx-auto flex h-20 max-w-screen-2xl items-center gap-8 px-4 sm:px-6 justify-between lg:px-8">
        <div className="flex items-center">
          <a
            href="/"
            className="font-bold uppercase tracking-tight text-neutral-100 text-lg"
          >
            Movies Database
          </a>

          <nav className="ml-8 pl-8 border-l border-l-gray-800">
            <ul className="list-none flex text-white gap-6">
              <li>
                <a className="text-inherit hover:underline" href="/">
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-inherit hover:underline"
                  href="/filmes-populares"
                >
                  Melhores Filmes
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
