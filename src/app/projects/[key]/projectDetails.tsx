import Image from "next/image";

type ProjectProps = {
    project: {
        key: string,
        name: string,
        description: string,
        image: string,
        github?: string,
        gitlab?: string,
        url?: string,
    }
}

export default function ProjectDetails({project}: ProjectProps) {
    return (
        <div>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <Image src={project.image} alt={project.name + ` cover`} width={512} height={288}/>
        </div>
    )
}
