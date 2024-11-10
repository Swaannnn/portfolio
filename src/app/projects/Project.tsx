"use client"

import Image from "next/image";
import GithubIcon from "@/components/icons/GithubIcon";
import OpenlinkIcon from "@/components/icons/OpenlinkIcon";
import Link from "next/link";
import {useRouter} from "next/navigation";

type ProjectProps = {
    project: {
        key: string,
        name: string,
        description: string,
        image: string,
        github?: string,
        url?: string,
    }
}

export default function Project({project}: ProjectProps) {
    const router = useRouter()
    const handleClick = () => {
        router.push(`/projects/${project.key}`)
    }

    return (
        <div>
            <div className="w-[448px] h-[252px] rounded-md overflow-hidden relative">
                <div onClick={handleClick} className="cursor-pointer relative group">
                    <Image
                        className="rounded-md transition-transform duration-400 ease-linear hover:scale-105 brightness-75 group-hover:brightness-50"
                        src={project.image}
                        alt={project.name + ` cover`}
                        width={512}
                        height={288}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-xl font-bold">{project.name}</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between mx-3 mt-3">
                <h3 className="text-2xl font-bold dark:text-gray-300">{project.name}</h3>
                <div className="flex gap-2">
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
        </div>
    )
}



/*
animations cool : https://www.julianfella.de/
card projets : https://www.daraayape.com/

*/