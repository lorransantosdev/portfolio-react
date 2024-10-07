import Sections from "../Components/Sections";
import { useNavigate } from "react-router-dom";
import TitlePages from "../Components/TitlePages";

export default function PageNotFound() {
    const navigate = useNavigate();

    const sectionError = {
        background: "bg-black",
        positions: "flex flex-col justify-center items-center text-white h-screen",
      };

    const titleNotFound = {
        style: "text-white font-inconsolata text-center sm:text-6xl text-5xl",
        text: "Error",
        highlightText: "404"
    };

    return(
        <Sections background={sectionError.background} positions={sectionError.positions}>
            <p className="text-[#da1854] sm:text-3xl text-lg font-inconsolata text-center">Page Not Found</p>
            <TitlePages style={titleNotFound.style} text={titleNotFound.text} highlightText={titleNotFound.highlightText} />

            <button 
            onClick={() => {navigate("/")}}
            className="font-roboto mt-10">Return to home page.</button>
        </Sections>
    )
}