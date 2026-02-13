import { useContext } from "react"
import LangContext from "../context/LangContext"

function Text() {
    const {lang} = useContext(LangContext)
    return(
        <h2> {lang} language was chosen</h2>
    )
    
}
export default Text