import Sections from "../Components/Sections";

export default function Contact(){
    const sectionAbout = {
        background: "bg-black",
        positions: "flex flex-col items-center justify-center text-white h-screen" 
    };
    return(
        <Sections background={sectionAbout.background} positions={sectionAbout.positions}>

        </Sections>
    )
}