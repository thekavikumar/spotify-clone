import React from "react";
import "./Body.css";
import { DataLayerValue } from "./DataLayer";
import Header from "./Header";
import SongRow from "./SongRow";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Body({ spotify }) {
  const [{ discover, user }, dispatch] = DataLayerValue();
  const playPlaylist = (id) => {
    spotify
      .play({
        playerInstance: new spotify.Player({ name: "..." }),
        //spotify_uri: "spotify:track:7xGfFoTpQ2E7fRF5lN10tr",
        spotify_uri: `spotify:playlist:37i9dQZEVXcUXnz8Ji1Vqo`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img
          src={
            user
              ? discover?.images[0]?.url
              : "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/s918QvLwhMWFOHBbI6fD3uOpkWiVPRTPT05SOdH1rHtOJgv8EoFQ4p51NHFy4TcwsU0F-bYrJud7gBmTdgvRnuhbDWrtN0kgbyK1e860hj4=/MDM6MzA6MDJUNDAtNjAtMg=="
          }
          alt="cover"
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        <div className="">
          {discover?.tracks.items.map((item) => (
            <SongRow playSong={playSong} track={item.track} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
