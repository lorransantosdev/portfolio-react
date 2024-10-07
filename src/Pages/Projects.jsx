import ProjectsList from "../Components/ProjectsList";
import Sections from "../Components/Sections";

export default function Projects(){

    const sectionProjects = {
        background: "bg-black",
        positions: "flex flex-col items-center justify-center text-white",
      };

    return(
        <Sections background={sectionProjects.background} positions={sectionProjects.positions}>
            <div>
                <h2 className="sm:text-5xl text-3xl mb-4 font-inconsolata text-center text-[#da1854]">Relevant Projects</h2>
            </div>

            <div>
                <ProjectsList />
            </div>
        </Sections>
    );
}