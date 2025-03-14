"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchForm = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchValue.length !== 0) {
      router.push(`/busca/${searchValue}`);
    }
  };

  return (
    <form className="flex gap-8 mt-12" onSubmit={handleFormSubmit}>
      <input
        type="text"
        className="grow rounded-lg border-gray-200 p-4 pe-12 sm:text-lg/relaxed shadow-sm bg-white"
        placeholder="Buscar um filme"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </form>
  );
};

export default SearchForm;
