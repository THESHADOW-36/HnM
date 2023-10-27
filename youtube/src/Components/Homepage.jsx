import React, { useState } from "react";
import "./Homepage.css"
import SearchBar from "./Header/Searchbar";
import homeLogo from "./../Images/Home.png"
import shortsLogo from "./../Images/Shorts.png"
import subLogo from "./../Images/Subscriptions.png"
import yourChannelLogo from "./../Images/YourChannel.png"
import historyLogo from "./../Images/History.png"
import yourVideosLogo from "./../Images/YourVideos.png"
import watchLaterLogo from "./../Images/WatchLater.png"
import tredingLogo from "./../Images/Trending.png"
import shoppingLogo from "./../Images/Shopping.png"
import musicLogo from "./../Images/Music.png"
import moviesLogo from "./../Images/Movies.png"
import liveLogo from "./../Images/Live.png"
import gamingLogo from "./../Images/Gaming.png"
import newsLogo from "./../Images/News.png"
import sportsLogo from "./../Images/Sports.png"
import learningLogo from "./../Images/Learning.png"
import fashionBeautyLogo from "./../Images/Fashion-Beauty.png"
import podcastsLogo from "./../Images/Podcasts.png"
import ytPremiumLogo from "./../Images/YouTubePremium.png"
import ytStudioLogo from "./../Images/YoutubeStudio.png"
import ytMusicLogo from "./../Images/YoutubeMusic.png"
import yrKidsLogo from "./../Images/YoutubeKids.png"
import settingLogo from "./../Images/Settings.png"
import reportHistoryLogo from "./../Images/ReportHistory.png"
import helpLogo from "./../Images/Help.png"
import sendFeedbackLogo from "./../Images/SendFeedback.png"
// 
const Homepage = () => {
   // eslint-disable-next-line
   const [vidContent, setVidContent] = useState([
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/sMPcumZJZcI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcW1z2UYd805skgCXg49SVzsakoQ",
         cLogo: "https://yt3.ggpht.com/tWGVfHXn5SaAsw-7livA-p-Db6VrWKtLESCqIaR0Gw6cMN47dhUWt3nMPYcoF7ueZBDsUq4atg=s68-c-k-c0x00ffffff-no-rj",
         title: "ARTIST vs PHOTOSHOP AI - Are We Being Replaced?",
         cName: "Benny Productions",
         cViews: "246K views . 6 days ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      },
      {
         img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
         cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
         title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
         cName: "Sony Music South",
         cViews: "2.9M views . 22 hours ago"
      }
   ])


   return (
      <>
         <SearchBar />
         <div className="homepage">

            <div className="menu-category">
               <div className="menu-category-layout">
                  <div className="mc-box-0">
                     <div className="mcb-logo"><img src={homeLogo} alt="" /></div>
                     <div className="mcb-text-0">Home</div>
                  </div>
                  <div className="mc-box">
                     <div className="mcb-logo"><img src={shortsLogo} alt="" /></div>
                     <div className="mcb-text">Shorts</div>
                  </div>
                  <div className="mc-box">
                     <div className="mcb-logo"><img src={subLogo} alt="" /></div>
                     <div className="mcb-text">Subscriptions</div>
                  </div>

                  <div className="mc-horizontal-line"></div>

                  <div className="mc-box">
                     {/* <div className="mcb-logo">O</div> */}
                     <div className="mcb-text-2">You</div>
                  </div>
                  <div className="mc-box">
                     <div className="mcb-logo"><img src={yourChannelLogo} alt="" /></div>
                     <div className="mcb-text">Your channel</div>
                  </div>
                  <div className="mc-box">
                     <div className="mcb-logo"><img src={historyLogo} alt="" /></div>
                     <div className="mcb-text">History</div>
                  </div>
                  <div className="mc-box">
                     <div className="mcb-logo"><img src={yourVideosLogo} alt="" /></div>
                     <div className="mcb-text">Your videos</div>
                  </div>
                  <div className="mc-box">
                     <div className="mcb-logo"><img src={watchLaterLogo} alt="" /></div>
                     <div className="mcb-text">Watch later</div>
                  </div>
               </div>

               <div className="mc-horizontal-line"></div>

               <div className="menu-category-layout">
                  <div className="mc-box">
                     {/* <div className="mcb-logo">O</div> */}
                     <div className="mcb-text-2">Explore</div>
                  </div>
                  <div className="mc-box">
                     <div className="mcb-logo"><img src={tredingLogo} alt="" /></div>
                     <div className="mcb-text">Trending</div>
                  </div>
                  <div className="mc-box">
                     <div className="mcb-logo"><img src={shoppingLogo} alt="" /></div>
                     <div className="mcb-text">Shopping</div>
                  </div>
                  <div className="mc-box">
                     <div className="mcb-logo"><img src={musicLogo} alt="" /></div>
                     <div className="mcb-text">Music</div>
                  </div>
                  <div className="mc-box">
                     <div className="mcb-logo"><img src={moviesLogo} alt="" /></div>
                     <div className="mcb-text">Movies</div>
                  </div>
                  <div className="mc-box">
                     <div className="mcb-logo"><img src={liveLogo} alt="" /></div>
                     <div className="mcb-text">Live</div>
                  </div>
                  <div className="mc-box">
                     <div className="mcb-logo"><img src={gamingLogo} alt="" /></div>
                     <div className="mcb-text">Gaming</div>
                  </div>
                  <div className="mc-box">
                     <div className="mcb-logo"><img src={newsLogo} alt="" /></div>
                     <div className="mcb-text">News</div>
                  </div>
                  <div className="mc-box">
                     <div className="mcb-logo"><img src={sportsLogo} alt="" /></div>
                     <div className="mcb-text">Sports</div>
                  </div>
                  <div className="mc-box">
                     <div className="mcb-logo"><img src={learningLogo} alt="" /></div>
                     <div className="mcb-text">Learning</div>
                  </div>
                  <div className="mc-box">
                     <div className="mcb-logo"><img src={fashionBeautyLogo} alt="" /></div>
                     <div className="mcb-text">Fashion & Beauty</div>
                  </div>
                  <div className="mc-box">
                     <div className="mcb-logo"><img src={podcastsLogo} alt="" /></div>
                     <div className="mcb-text">Podcasts</div>
                  </div>
               </div>

               <div className="mc-horizontal-line"></div>

               <div className="menu-category-layout">
                  <div className="mc-box">
                     {/* <div className="mcb-logo">O</div> */}
                     <div className="mcb-text-2">More from YouTube</div>
                  </div>
                  <div className="mc-box">
                     <div className="mcb-logo"><img src={ytPremiumLogo} alt="" /></div>
                     <div className="mcb-text">YouTube Premium</div>
                  </div>
                  <div className="mc-box">
                     <div className="mcb-logo"><img src={ytStudioLogo} alt="" /></div>
                     <div className="mcb-text">YouTube Studio</div>
                  </div>
                  <div className="mc-box">
                     <div className="mcb-logo"><img src={ytMusicLogo} alt="" /></div>
                     <div className="mcb-text">YouTube Music</div>
                  </div>
                  <div className="mc-box">
                     <div className="mcb-logo"><img src={yrKidsLogo} alt="" /></div>
                     <div className="mcb-text">YouTube Kids</div>
                  </div>
               </div>

               <div className="mc-horizontal-line"></div>

               <div className="menu-category-layout">
                  <div className="mc-box">
                     <div className="mcb-logo"><img src={settingLogo} alt="" /></div>
                     <div className="mcb-text">Setting</div>
                  </div>
                  <div className="mc-box">
                     <div className="mcb-logo"><img src={reportHistoryLogo} alt="" /></div>
                     <div className="mcb-text">Report history</div>
                  </div>
                  <div className="mc-box">
                     <div className="mcb-logo"><img src={helpLogo} alt="" /></div>
                     <div className="mcb-text">Help</div>
                  </div>
                  <div className="mc-box">
                     <div className="mcb-logo"><img src={sendFeedbackLogo} alt="" /></div>
                     <div className="mcb-text">Send feedback</div>
                  </div>
               </div>

               <div className="mc-horizontal-line"></div>

               <div className="guide-links-primary">
                  <p>About</p>
                  <p>Press</p>
                  <p>Copyright</p>
                  <p>Contact us</p>
                  <p>Creators</p>
                  <p>Advertise</p>
                  <p>Developers</p>
               </div>
               <div className="guide-links-secondary">
                  <p>Terms</p>
                  <p>Privacy</p>
                  <p>Policy & Safety</p>
                  <p>How YouTube works</p>
                  <p>Test new features</p>
               </div>
               <p className="google-llc">© 2023 Google LLC</p>
            </div>


            <div className="main-content">

               <div className="tab-list-layout">
                  <div className="tab-list">
                     <p className="tab-name-0">All</p>
                     <p className="tab-name">Gaming</p>
                     <p className="tab-name">Mixes</p>
                     <p className="tab-name">Music</p>
                     <p className="tab-name">Live</p>
                     <p className="tab-name">Valorant</p>
                     <p className="tab-name">CSS</p>
                     <p className="tab-name">Trailers</p>
                     <p className="tab-name">Gadgets</p>
                     <p className="tab-name">Recently uploaded</p>
                     <p className="tab-name">Watched</p>
                     <p className="tab-name">Video game </p>
                  </div>
                  <div className="tl-right-arrow"><i class="fa-solid fa-chevron-right"></i></div>
               </div>


               <div className="body-content">
                  {vidContent.length && vidContent.map((content) => (
                     <div className="video-content-layout">

                        <div className="vc-img"><img src={content.img} alt="" /></div>

                        <div className="vc-details-layout">
                           <div className="vc-channel-logo"><img src={content.cLogo} alt="" /></div>
                           <div className="vc-details">
                              <div className="vc-title">{content.title}</div>
                              <div className="vc-channel-name">{content.cName}</div>
                              <div className="vc-channel-views">{content.cViews}</div>
                           </div>
                           <div className="vc-more-details-box">
                              <div className="vc-more-details"><i class="fa-solid fa-ellipsis-vertical"></i></div>
                           </div>
                        </div>
                     </div>
                  ))
                  }
               </div>
            </div>
         </div>
      </>
   )
}

export default Homepage;