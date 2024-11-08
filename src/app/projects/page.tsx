import projects from '@/assets/projects.json'
import Project from "@/components/Project";

export default function ProjectsPage() {
    return (
        <div className="ml-3">
            <h1>Realisations</h1>
            <h2>Here are my realisations</h2>

            <br/><br/><br/><br/>
            <div>
                <div className="flex gap-10 mb-24">
                    <Project project={projects[0]}/>
                    <Project project={projects[1]}/>
                    <Project project={projects[2]}/>
                </div>
                <div className="flex gap-10">
                    <Project project={projects[3]}/>
                    <Project project={projects[4]}/>
                    <Project project={projects[5]}/>
                </div>
            </div>
        </div>
    )
}
