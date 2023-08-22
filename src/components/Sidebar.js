import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsFillFileMusicFill } from "react-icons/bs";
import { MdSportsKabaddi } from "react-icons/md";
import { MdSportsEsports } from "react-icons/md";
import { MdLocalMovies } from "react-icons/md";
import { MdLocalLibrary } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai";
import { FaStopwatch } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { BsCameraReelsFill } from "react-icons/bs";
import { MdSubscriptions } from "react-icons/md";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48 mx-5 ">
      <ul className="text-xl">
        <li>
          <Link className="flex p-2 gap-2" to="/">
            {" "}
            <TiHome />
            Home
          </Link>
        </li>

        <li className="flex items-center p-2 gap-3">
          <BsCameraReelsFill className="w-5 h-5" />
          <span>Shorts</span>
        </li>

        <li className="flex items-center p-2 gap-2">
          <MdOutlineLiveTv className="w-5 h-5" />
          <span>Live</span>
        </li>

        <li className="flex items-center p-2 gap-2">
          <MdSubscriptions className="w-5 h-5" />
          <span>Subscription</span>
        </li>

        <hr class="border-t-2 border-black" />
      </ul>
      <ul className="text-xl">
        <li className="flex items-center p-2 gap-2">
          <BsFillFileMusicFill className="w-5 h-5" />
          <span>Music</span>
        </li>

        <li className="flex items-center p-2 gap-2">
          <MdSportsKabaddi className="w-5 h-5" />
          <span>Sports</span>
        </li>

        <li className="flex items-center p-2 gap-2">
          <BsFillFileMusicFill className="w-5 h-5" />
          <span>Music</span>
        </li>

        <li className="flex items-center p-2 gap-2">
          <MdLocalMovies className="w-5 h-5" />
          <span>Movies</span>
        </li>

        <li className="flex items-center p-2 gap-2">
          <MdSportsEsports className="w-5 h-5" />
          <span>Gaming</span>
        </li>
      </ul>

      <hr class="border-t-2 border-black" />

      <h1 className="font-bold pt-5 text-xl">Watch Letter</h1>

      <ul className="text-xl">
        <li className="flex items-center p-2 gap-2">
          <MdLocalLibrary className="w-5 h-5" />
          <span>Library</span>
        </li>

        <li className="flex items-center p-2 gap-2">
          <FaHistory className="w-5 h-5" />
          <span>History</span>
        </li>

        <li className="flex items-center p-2 gap-2">
          <AiTwotoneLike className="w-5 h-5" />
          <span>Liked videos</span>
        </li>

        <li className="flex items-center p-2 gap-2">
          <FaStopwatch className="w-5 h-5" />
          <span>Watch Letter</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
