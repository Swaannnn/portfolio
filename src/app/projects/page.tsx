import projects from '@/assets/projects.json'
import Project from "@/components/Project";

export default function ProjectsPage() {
    return (
        <div className="ml-3">
            <h1>Realisations</h1>
            <h2>Here are my realisations</h2>

            <br/><br/><br/><br/>
            <div className="width-full">
                <div className="flex gap-10 flex-wrap justify-center">
                    {Object.entries(projects).map(([key, project]) => (
                        <Project project={{ ...project, key }} key={key} />
                    ))}
                </div>
            </div>
        </div>
    )
}
