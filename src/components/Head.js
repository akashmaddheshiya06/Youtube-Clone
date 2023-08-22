import React from "react";
import { useState, useEffect } from "react";
import { toggleMenu } from "../utils/AppSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/Constant";
import { cacheResults } from "../utils/searchSlice";
import { FaUserAlt } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import "./head.css";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    // API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("Api call - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json);
    setSuggestions(json[1]);

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg HeroNav ">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-16 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"
          id="menuImg"
        />

        <div className="logo">
          <li>
            <IoLogoYoutube />
            <span>Youtube</span>
          </li> 
        </div>
      </div>

      <div className="col-span-10 px-10 search-bar">
          <input
            className=" px-5 w-1/2 border-2 border-gray-500 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />

          <button className="border-2 border-gray-500 px-5 py-2 rounded-r-full bg-gray-100 ">
            🔍
          </button>

        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[31rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-300">
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div
        className="col-span-1 flex justify-center"
        style={{ alignItems: "center" }}
      >
        <FaUserAlt size="2rem" />
      </div>
    </div>
  );
};

export default Head;
