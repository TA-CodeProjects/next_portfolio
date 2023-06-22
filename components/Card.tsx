import Image from "next/image"
import Link from "next/link"

type CardProps = {
    project: Project
}

const Card = (props: CardProps) => {
    return (
        <div className="flex flex-col border-solid border-2 border-blue-300">
             <Link href={`/projects/${props.project.slug}`} >
            <h3 className="font-bold text-2xl py-2 bg-blue-500 text-white">{props.project.name}</h3>
            <Image src={props.project.image} alt={props.project.name} width={0} height={0} sizes="100vw" className="w-full h-auto"/>
            </Link>
        </div>
       
    )
}

export default Card