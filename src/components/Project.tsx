import Image from "next/image";
import GithubIcon from "@/components/icons/GithubIcon";
import GitlabIcon from "@/components/icons/GitlabIcon";
import OpenlinkIcon from "@/components/icons/OpenlinkIcon";
import Link from "next/link";

type ProjectProps = {
    project: {
        name: string,
        description: string,
        image: string,
        github?: string,
        gitlab?: string,
        url?: string,
    }
}

export default function Project({project}: ProjectProps) {
    return (
        <div>
            <div className="w-[512px] h-[288px] rounded-md overflow-hidden relative">
                <Link href={"/project/1"}>
                    <Image
                        className="rounded-md transition-transform duration-400 ease-linear hover:scale-105 hover:brightness-[0.35]"
                        src={project.image}
                        alt={project.name + ` cover`}
                        width={512}
                        height={288}
                    />
                </Link>
            </div>

            <div className="flex justify-between mx-3 mt-3">
                <h3 className="text-2xl font-bold dark:text-gray-300">{project.name}</h3>
                <div className="flex gap-2">
                    {project.gitlab && (
                        <Link href={project.gitlab}>
                            <GitlabIcon className="text-black dark:text-gray-300"/>
                        </Link>
                    )}
                    {project.github && (
                        <Link href={project.github}>
                            <GithubIcon className="text-black dark:text-gray-300"/>
                        </Link>
                    )}
                    {project.url && (
                        <Link href={project.url}>
                            <OpenlinkIcon className="text-black dark:text-gray-300"/>
                        </Link>
                    )}
                </div>
            </div>
            {/*<p>{project.description}</p>*/}
        </div>
    )
}



/*
animations cool : https://www.julianfella.de/
card projets : https://www.daraayape.com/

*/