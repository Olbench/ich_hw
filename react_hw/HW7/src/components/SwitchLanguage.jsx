import { useContext } from "react"
import LangContext from "../context/LangContext"
// import './BtnChangeLang.css'

function SwitchLanguage({}) {
    const {lang,switchLang} = useContext(LangContext)
    return(
        <div>
            <button className="btn" onClick={switchLang}>Switch Language (now: {lang})</button>
        </div>
    )
}
export default SwitchLanguage