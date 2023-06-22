import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BsGithub } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";

const Page = ({ params }: { params: { slug: string } }) => {
  const project = projects.find((project) => project.slug === params.slug);

  if (!project) {
    notFound();
  }

  const splitWords = (arr: string[]) => {
    return arr.join(" | ");
  };

  return (
    <div className="m-5 grid gap-5">
      <Link
        href="/projects"
        className="w-fit bg-blue-600 hover:bg-blue-500 rounded p-3 text-white"
      >
        <BiArrowBack />
      </Link>
      <h1 className="font-bold text-3xl text-center">{project.name}</h1>
      <p>{project.description}</p>
      <div className="bg-slate-200 grid gap-2 p-5">
        <h2 className="font-bold text-xl">Technologies Used:</h2>
        <p>
          <span className="font-bold">Backend: </span>
          {splitWords(project.technologies.backend)}
        </p>
        {project.technologies.frontend.length !== 0 && (
          <p>
            <span className="font-bold">Frontend: </span>
            {splitWords(project.technologies.frontend)}
          </p>
        )}
      </div>
      <a
        href={project.github}
        target="_blank"
        className="bg-blue-600 hover:bg-blue-500 rounded text-white p-3 text-center flex items-center gap-2 justify-center"
        rel="noopener noreferrer"
      >
        <BsGithub /> Github
      </a>
      {project.videoSrc !== "" && (
        <>
          <h3 className="font-bold text-xl">Watch the app in action:</h3>
          <div className="relative w-full truncate pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
              src={project.videoSrc}
            ></iframe>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
