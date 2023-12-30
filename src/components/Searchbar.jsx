import { useState } from "react";
import { useNavigate }  from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => (
  <form autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
    <label htmlFor="search-feild" className="sr-only">
      search all songs
    </label>
    <div className="flex flex-row justify-start items-center">
      <FiSearch className="w-5 h-5 ml-4" />
      <input
        type="search"
        autoComplete="off"
        name="search-feild"
        id="search-feild"
        placeholder="Search all songs"
        value=""
        onChange={() => {}}
        className="w-full bg-transparent focus:outline-none ml-2 text-base text-white placeholder-gray-400"
      />
    </div>
  </form>
);

export default Searchbar;
