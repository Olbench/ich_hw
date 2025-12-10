import HeadLine from "../HeadLine/HeadLine.jsx";
import SpotifyLogo from "../SpotifyLogo/SpotifyLogo.jsx";
import AuthTitle from "../AuthTitle/AuthTitle.jsx";
import AuthButtons from "../AuthButtons/AuthButtons.jsx";
import style from "../FullScreen/FullScreen.module.css";

function FullScreen() {
  return (
    <>
      <SpotifyLogo />
      <div className={style.full_screen_main}>
        <HeadLine />
        <AuthTitle />
        <AuthButtons />
      </div>
    </>
  );
}

export default FullScreen;
