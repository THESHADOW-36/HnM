import React from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css"
import youtubeLogo from "./../../Images/YoutubeLogoWhite.png"
import create from "./../../Images/Create.png"
import notification from "./../../Images/Notification.png"
import profile from "./../../Images/Profile.png"

const SearchBar = () => {
  const router = useNavigate();

  function signInSite() {
    router("/sign-in")
  }

  return (
    <>
      <div className="search-bar-bg">
        <div className="search-bar">
          <div className="sb-yt-menu-logo">
            <div className="sb-menu">
              <i class="fa-solid fa-bars fa-lg"></i>
            </div>
            <div className="sb-yt-logo">
              <img src={youtubeLogo} alt="" />
            </div>
          </div>

          <div className="search-bar-box">
            <div className="search-bar-layout">
              <div className="search-bar-input"><input type="text" placeholder="Search" /></div>
              <div className="search-bar-logo"><i class="fa-solid fa-magnifying-glass fa-lg"></i></div>
            </div>

            <div className="sb-voice-search">
              <i class="fa-solid fa-microphone"></i>
            </div>
          </div>

          <div className="sb-create-notify-signin">
            <div className="sb-create">
              <img src={create} alt="" />
            </div>
            <div className="sb-notify">
              <img src={notification} alt="" />
            </div>
            <div className="sb-profile" onClick={signInSite}>
              <img src={profile} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchBar;