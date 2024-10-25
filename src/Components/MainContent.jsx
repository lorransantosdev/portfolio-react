import Banner from "./Banner";
import Sections from "./Sections";
import SocialLinks from "./SocialLinks";
import TitlePages from "./TitlePages";
import animationImage from "../../public/innovation-animate.svg"

export default function MainContent() {

    const titleBanner = {
        style: "text-white font-inconsolata text-center sm:text-6xl text-5xl",
        text: "Hello! I'm",
        highlightText: "Lorran"
    };

    const sectionAbout = {
        background: "bg-black",
        positions: "flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:justify-center text-white" 
    };

    return (
        <>
            <Banner>
                <TitlePages style={titleBanner.style} text={titleBanner.text} highlightText={titleBanner.highlightText} />
                <p className="text-[#da1854] sm:text-3xl text-lg font-inconsolata text-center">software engineering student</p>
                <div className="text-white mt-10">
                    <SocialLinks/>
                </div>
            </Banner>

            <Sections background={sectionAbout.background} positions={sectionAbout.positions}>
                <div className="flex flex-col justify-center items-center lg:items-start">
                    <h2 className="sm:text-5xl text-3xl mb-6 font-inconsolata text-center text-[#da1854]">A little about me</h2>
                    
                    <p className="sm:w-4/5 w-fulll sm:text-xl text-sm font-roboto text-center lg:text-start">
                        Since childhood, I have been fascinated by <span className="text-[#6A00FF]">technology</span> and its potential to create positive change in the world. 
                        I am a <span className="text-[#6A00FF]">Software Engineering student at FIAP</span>, with knowledge in <span className="text-[#6A00FF]">React</span>, <span className="text-[#6A00FF]">Node.js</span>, <span className="text-[#6A00FF]">Python</span>, <span className="text-[#6A00FF]">JavaScript</span>, and other technologies. 
                        I love building innovative solutions that make a difference. When I'm not coding, I enjoy <span className="text-[#6A00FF]">exploring new places</span> and practicing sports—activities that keep me energized and inspire me to constantly push my limits.
                    </p>
                </div>
                <img src={animationImage} alt="Animation Image" className="w-3/5 lg:w-2/5"/>
            </Sections>

        </>
    );
}
