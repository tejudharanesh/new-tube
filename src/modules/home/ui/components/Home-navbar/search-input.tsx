import { SearchIcon } from "lucide-react";

export const SearchInput = () => {
  // TODO: add search functionality
  return (
    <form className="flex w-full max-w-[600px]">
      <div className="relative w-full">
        <input
          type="text"
          className="w-full py-2 pl-4 pr-12 text-sm placeholder-gray-
        500 border border-gray-300 rounded-l-full focus:outline-none 
         focus:border-blue-500"
          placeholder="Search for a movie"
        />
        {/* TODO: add remove search button */}
      </div>
      <button
        type="submit"
        className="px-5 py-2.5 bg-gray-100 border border-l-0 rounded-r-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <SearchIcon className="size-4" />
      </button>
    </form>
  );
};
