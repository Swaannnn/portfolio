"use client";

import { useParams } from 'next/navigation';
import projects from '@/assets/projects.json';
import Link from "next/link";
import ProjectDetails from "@/app/projects/[key]/projectDetails";

export default function ProjectPage() {
    const params = useParams();
    const key = params.key

    const project = projects[key]; // erreur TS mais ça marche

    if (!project) {
        return (
            <div>
                <h1>Projet non trouvé</h1>
                <p>Le projet que vous recherchez n&apos;existe pas.</p>
                <Link href={'/projects'}>Retour à la liste des projets</Link>
            </div>
        );
    }

    return (
        <ProjectDetails project={project}/>
    );
}
