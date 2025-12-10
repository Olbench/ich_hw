import style from "../SpotifyLogo/SpotifyLogo.module.css";
import spotifyLogo from "../../assets/spotify_logo.svg";

function SpotifyLogo() {
  return (
    <div className={style.spotify_header}>
      <img src={spotifyLogo} alt="" />
    </div>
  );
}

export default SpotifyLogo;
