import React, { useState } from "react";
import "./YtVideoPage.css"
import SearchBar from "./../Header/SearchBar.jsx";
// import { useParams } from "react-router-dom";

const VideoPage = () => {
  // const { id } = useParams();

  const YtLikeButton = (props) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20"
        stroke="white"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const YtDislikeButton = (props) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      transform="matrix(-1,0,0,-1,0,0)"
      {...props}
    >
      <path
        d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20"
        stroke="white"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const YtShareButton = (props) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      id="share"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width={24}
        height={24}
        fill="none"
      />
      <path
        id="Rectangle"
        d="M12,4V0l8,7-8,7V10S0,9.069,0,14.737C0,3.4,12,4,12,4Z"
        transform="translate(2 5)"
        fill="none"
        stroke="white"
        strokeMiterlimit={10}
        strokeWidth={1}
      />
    </svg>
  );

  // eslint-disable-next-line
  const YtDownloadButton1 = (props) => (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 32 32"
      enableBackground="new 0 0 32 32"
      xmlSpace="preserve"
      {...props}
    >
      <line
        fill="none"
        stroke="white"
        strokeWidth={2}
        strokeMiterlimit={10}
        x1={25}
        y1={28}
        x2={7}
        y2={28}
      />
      <line
        fill="none"
        stroke="white"
        strokeWidth={2}
        strokeMiterlimit={10}
        x1={16}
        y1={23}
        x2={16}
        y2={4}
      />
      <polyline
        fill="none"
        stroke="white"
        strokeWidth={2}
        strokeMiterlimit={10}
        points="9,16 16,23 23,16 "
      />
    </svg>
  );
  const YtDownloadButton = (props) => (
    <svg
      width="22px"
      height="22px"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path stroke="white" strokeLinecap="round" strokeWidth={2} d="M16 22V5" />
      <path
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 16l7 7 7-7M9 27h14"
      />
    </svg>
  );

  const YtMenuButton = (props) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={6.5} cy={12} r={1.5} fill="white" />
      <circle cx={12} cy={12} r={1.5} fill="white" />
      <circle cx={17.5} cy={12} r={1.5} fill="white" />
    </svg>
  );

  const YtVerifiedTick = (props) => (
    <svg
      width={12}
      height={12}
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M800 510a30 30 0 1 1 30-30 30 30 0 0 1-30 30Zm-16.986-23.235a3.484 3.484 0 0 1 0-4.9l1.766-1.756a3.185 3.185 0 0 1 4.574.051l3.12 3.237a1.592 1.592 0 0 0 2.311 0l15.9-16.39a3.187 3.187 0 0 1 4.6-.027l1.715 1.734a3.482 3.482 0 0 1 0 4.846l-21.109 21.451a3.185 3.185 0 0 1-4.552.03Z"
        transform="translate(-770 -450)"
        style={{
          fill: "#aaaaaa",
          fillRule: "evenodd",
        }}
      />
    </svg>
  );
  const MiniPlay = (props) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z"
        stroke="white"
        strokeWidth={4}
      />
    </svg>
  );
  const TheaterMode = (props) => (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24px"
      height="24px"
      viewBox="0 0 64 64"
      enableBackground="new 0 0 64 64"
      xmlSpace="preserve"
      {...props}
    >
      <rect
        x={1}
        y={12}
        fill="none"
        stroke="white"
        strokeWidth={8}
        strokeMiterlimit={10}
        width={62}
        height={40}
      />
    </svg>
  );
  const FullScreen = (props) => (
    <svg
      width="20px"
      height="20px"
      viewBox="0 -0.5 17 17"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="si-glyph si-glyph-square-dashed-2"
      {...props}
    >
      <title>{"1198"}</title>
      <defs />
      <g stroke="white" strokeWidth={1} fill="none" fillRule="evenodd">
        <g fill="white">
          <path
            d="M10,0.834 L15.083,0.834 L15.083,5.875 L15.917,5.875 L15.917,0 L10,0 L10,0.834 Z"
            className="si-glyph-fill"
          />
          <path
            d="M0.834,5.875 L0.834,0.834 L5.917,0.834 L5.917,0 L0,0 L0,5.875 L0.834,5.875 Z"
            className="si-glyph-fill"
          />
          <path
            d="M15.083,10.125 L15.083,15.166 L10,15.166 L10,16 L15.917,16 L15.917,10.125 L15.083,10.125 Z"
            className="si-glyph-fill"
          />
          <path
            d="M5.917,15.166 L0.834,15.166 L0.834,10.125 L0,10.125 L0,16 L5.917,16 L5.917,15.166 Z"
            className="si-glyph-fill"
          />
        </g>
      </g>
    </svg>
  );
  // eslint-disable-next-line
  const [mainVideoContent, setMainVideoContent] = useState([
    {
      id: "001",
      vidImg: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
      vidcLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
      vidTitle: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
      vidDuration: "1:54",
      vidcName: "Sony Music South",
      vidSubscribers: "16.1M subscribers",
      vidLikes: "557K",
      vidViews: "5.9M views",
      vidPosted: "7 days ago",
      vidTag: "#2 on Trending for music",
      vidDescriptionLine1: "Song Title : Lokiverse 2.0",
      vidDescriptionLine2: "Album / Movie : Leo",
      vidDescriptionLine3: "Composed by Anirudh Ravichander"
    }
  ])

  // eslint-disable-next-line
  const [videoListContent, setVideoListContent] = useState([
    {
      id: "007",
      vidImg: "https://i.ytimg.com/vi/WWr9086eWtY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLArmc5VgIYn7RyEb9_y2NGZc1UrZw",
      vidTitle: "LEO - Ordinary Person Lyric | Thalapathy Vijay, Anirudh Ravichander, Lokesh Kanagaraj, NikhitaGandhi",
      vidcName: "Sony Music South",
      vidViews: "15M views",
      vidPosted: "10 days ago",
      vidDuration: "2:19"
    },
    {
      id: "010",
      vidImg: "https://i.ytimg.com/vi/PzBrCSiwYGM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCqWiqzX-Y_UHZeS2PUls_rUzZrbA",
      vidTitle: "Neethaane En Ponvasantham - Vaanam Mella Video | Jiiva, Samantha",
      vidcName: "SonyMusicSouthVEVO",
      vidViews: "9.5M views",
      vidPosted: "8 years ago",
      vidDuration: "5:45"
    },
    {
      id: "011",
      vidImg: "https://i.ytimg.com/vi/vKWv_DuhOXg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBRRmPGbB0qGMhj9F4YI7rd5-4G3Q",
      vidTitle: "Kan Irandil Official Video Song | Uthama Puthiran | Dhanush | Genelia",
      vidcName: "Think Music India",
      vidViews: "17M views",
      vidPosted: "8 years ago",
      vidDuration: "4:00"
    },
    {
      id: "012",
      vidImg: "https://i.ytimg.com/vi/ATElufr0OiE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA4b9x1ZOFFQdRLOqh8X_5ba5BAWw",
      vidTitle: "Mudhal Nee Mudivum Nee - Title Track Video | Darbuka Siva | Sid Sriram | Thamarai",
      vidcName: "SonyMusicSouthVEVO",
      vidViews: "121M views",
      vidPosted: "1 year ago",
      vidDuration: "5:36"
    },
    {
      id: "008",
      vidImg: "https://i.ytimg.com/vi/A9D8mWjhYqQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAWFumMgLuij76Y3ntnanx1jk3cEA",
      vidTitle: "Social Media Paavangal | Parithabangal",
      vidcName: "Parithabangal",
      vidViews: "602K views",
      vidPosted: "7 hours ago",
      vidDuration: "13:42"
    },
    {
      id: "009",
      vidImg: "https://i.ytimg.com/vi/-dECADPvHu8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBt84qjp0kxNB3ePjfaom5eKoSypg",
      vidTitle: "THE STRENGTH OF DUELISTS",
      vidcName: "VALORANT - Protatomonster",
      vidViews: "34K views",
      vidPosted: "8 hours ago",
      vidDuration: "21:01"
    },
    {
      id: "013",
      vidImg: "https://i.ytimg.com/vi/YFYiTS46x-8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDxoLSBKyUp__VQdOrZPUEveIV1vg",
      vidTitle: "Vinnaithaandi Varuvaayaa - Hosanna Video | Rahman | STR, Trisha",
      vidcName: "SonyMusicSouthVEVO",
      vidViews: "56M views",
      vidPosted: "7 years ago",
      vidDuration: "5:37"
    },
    {
      id: "014",
      vidImg: "https://i.ytimg.com/vi/RR3I5CbE5I0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA6-Fi7XZfghK_SXY1iVRquhKrcRA",
      vidTitle: "Leo Post-release Lokesh Kanagaraj Interview with Sudhir Srinivasan | Leo | Vijay | Trisha | Part 1",
      vidcName: "Cinema Express",
      vidViews: "781K views",
      vidPosted: "4 days ago",
      vidDuration: "5:00"
    },
    {
      id: "015",
      vidImg: "https://i.ytimg.com/vi/9VpeTiz81gc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBHnGqP14r3OYihLri0TzxM1MYMhQ",
      vidTitle: "VIKRAM – Pathala Pathala Lyric | Kamal Haasan | Vijay Sethupathi | Lokesh Kanagaraj | Anirudh",
      vidcName: "Sony Music South",
      vidViews: "114M views",
      vidPosted: "1 year ago",
      vidDuration: "3:33"
    },
    {
      id: "016",
      vidImg: "https://i.ytimg.com/vi/Wq-S2FQAh_w/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCofzLnqU1-vtDJ5_1NcCUuiJvLPQ",
      vidTitle: "Maryan - Kadal Raasa Naan Full Video",
      vidcName: "SonyMusicSouthVEVO",
      vidViews: "11M views",
      vidPosted: "8 years ago",
      vidDuration: "3:17"
    },
    {
      id: "017",
      vidImg: "https://i.ytimg.com/vi/q6zhos-TcNA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBeJAutoJIm3PpI-J96l92nqQaOPw",
      vidTitle: "URUTTU TECH (2023) - Full Movie (Tamil) Full HD 60fps | Uruttu Annan, PC Doc, Kelu Mavaney Kelu",
      vidcName: "A2D Channel",
      vidViews: "2M views",
      vidPosted: "4 months ago",
      vidDuration: "1:05:23"
    },
    {
      id: "018",
      vidImg: "https://i.ytimg.com/vi/bSmSzdldah0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDQOcvBXlpWCqn0wWoLfjp2OwCQ-w",
      vidTitle: "Education Waste? - படிப்பு தேவையா? | BiggBoss Fight - No Job? No Talent? Why Education?",
      vidcName: "A2D Channel",
      vidViews: "672K views",
      vidPosted: "2 weeks ago",
      vidDuration: "17:00"
    },
  ])

  // if (id) {
  //   return mainVideoContent;
  // }
  return (
    <>
      <SearchBar />

      <div className="video-page">

        <div className="main-video">
          <div className="main-video-layout">
            {mainVideoContent.length && mainVideoContent.map((video) => (
              <div className="main-video-content-layout">
                <div className="main-video-content">
                  <div className="mvc-videoplay">
                    <img src={video.vidImg} alt="" />
                  </div>
                  <div className="mvc-controller-layout">
                    <div className="mvc-controller">
                      <div className="mvc-timed-progress-bar"></div>
                      <div className="mvc-controller-container">
                        <div className="mvc-cc-left">
                          <div className="mvc-cc-play"><i class="fa-solid fa-play"></i></div>
                          <div className="mvc-cc-play-next"><i class="fa-solid fa-forward-step"></i></div>
                          <div className="mvc-cc-volume"><i class="fa-solid fa-volume-low"></i></div>
                          <p className="mvc-cc-duration">0:01 / {video.vidDuration}</p>
                        </div>
                        <div className="mvc-cc-right">
                          <div className="mvc-cc-auto-play"><i class="fa-solid fa-circle-play"></i></div>
                          <div className="mvc-cc-caption"><i class="fa-solid fa-closed-captioning"></i></div>
                          <div className="mvc-cc-settings"><i class="fa-solid fa-gear"></i></div>
                          <div className="mvc-cc-miniplay"><MiniPlay /></div>
                          <div className="mvc-cc-theater-mode"><TheaterMode /></div>
                          <div className="mvc-cc-full-screen"><FullScreen /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mvc-details">
                  <p className="mvc-title">{video.vidTitle}</p>
                  <div className="mvc-channel-subscribe-like-share-download">
                    <div className="mvc-channel-subscribe">
                      <div className="mvc-channel-logo"><img src={video.vidcLogo} alt="" /></div>
                      <div className="mvc-channel-name-subscribers">
                        <p className="mvc-channel-name">{video.vidcName}</p>
                        <p className="mvc-channel-subscribers">{video.vidSubscribers}</p>
                      </div>
                      <div className="mvc-subscribe-button"><button>Subscribe</button></div>
                    </div>

                    <div className="mvc-like-share-download">
                      <div className="mvc-like">
                        <div className="like-button">
                          <div><YtLikeButton /></div>
                          <p>{video.vidLikes}</p>
                        </div>
                        <div className="mvc-vertical-line"></div>
                        <div className="dislike-button"><YtDislikeButton /></div>
                      </div>

                      <div className="mvc-share">
                        <div><YtShareButton /></div>
                        <p>Share</p>
                      </div>

                      <div className="mvc-download">
                        <div><YtDownloadButton /></div>
                        <p>Download</p>
                      </div>

                      <div className="mvc-menu"><YtMenuButton /></div>
                    </div>
                  </div>
                </div>

                <div className="mvc-description-layout">
                  <div className="mvc-description">
                    <div className="mvc-view-posted-tag">
                      <div className="mvc-views">{video.vidViews}</div>
                      <div className="mvc-posted-on">{video.vidPosted}</div>
                      <div className="mvc-tags">{video.vidTag}</div>
                    </div>
                    <p className="mvc-description-lines">{video.vidDescriptionLine1}</p>
                    <p className="mvc-description-lines">{video.vidDescriptionLine2}</p>
                    <p className="mvc-description-lines">{video.vidDescriptionLine3}<span className="mvc-description-lines-more">...more</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="video-list">
          <div className="video-list-layout">
            {videoListContent.length && videoListContent.map((vlc) => (
              <div className="video-list-content-layout">
                <div className="vlc-img-lay">
                  <div className="vlc-img"><img src={vlc.vidImg} alt="" /></div>
                  <p className="vlc-duration">{vlc.vidDuration}</p>
                </div>
                <div className="vlc-details">
                  <p className="vlc-title">{vlc.vidTitle}</p>
                  <div className="vlc-name-verify">
                    <p className="vlc-name">{vlc.vidcName}</p>
                    <div className="vlc-verify"><YtVerifiedTick /></div>
                  </div>
                  <div className="vlc-view-posted-lay">
                    <p className="vlc-views">{vlc.vidViews}</p>
                    <div className="vlc-cirle-gap"><i class="fa-solid fa-circle"></i></div>
                    <p className="vlc-posted">{vlc.vidPosted}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoPage;