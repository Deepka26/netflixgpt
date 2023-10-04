import React from "react";
import lang from "../Utils/languageConstant";
import { useSelector } from "react-redux";
 
const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  return (
    <div className=" mt-[10%]  w-full  absolute z-100 ">
      <form className="bg-black flex items-center justify-center ">
        <input
          type="text"
          name="search"
          id="serach"
          placeholder={lang[language]?.gptSearchPlaceholder}
          className="px-3 py-2 m-4 placeholder:text-xs w-4/12 rounded "
        />
        <button className="px-7 py-2 bg-red-700 text-white rounded-lg">
          {lang[language]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
