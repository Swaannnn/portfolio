"use client"

import projects from '@/assets/projects.json'
import Project from "@/app/projects/Project";
import { useState, useMemo } from "react";

export default function ProjectsPage() {
    const [category, setCategory] = useState(2);

    const filteredProjects = useMemo(() => {
        if (category === 0) {
            return Object.entries(projects).filter(([, project]) => !project.personal);
        }
        if (category === 1) {
            return Object.entries(projects).filter(([, project]) => project.personal);
        }
        return Object.entries(projects);
    }, [category]);

    return (
        <div className="ml-3">
            <h1 className="text-3xl">My projects</h1>
            <br />
            <div className="flex justify-end mr-14 mb-3 space-x-4">
                <label className="flex gap-1" onClick={() => setCategory(0)}>
                    <input type="radio" value={0} name="category" id="education"/>
                    <p>Education</p>
                </label>
                <label className="flex gap-1" onClick={() => setCategory(1)}>
                    <input type="radio" value={1} name="category" id="personal"/>
                    <p>Personal</p>
                </label>
                <label className="flex gap-1" onClick={() => setCategory(2)}>
                    <input type="radio" value={2} name="category" id="all" defaultChecked/>
                    <p>All</p>
                </label>
            </div>

            <div className="width-full">
                <div className="flex gap-10 flex-wrap justify-center">
                    {filteredProjects.map(([key, project]) => (
                        <Project project={{...project, key}} key={key} />
                    ))}
                </div>
            </div>
        </div>
    )
}
