import Image from "next/image";
import { profile } from "../data/index";
import { CgProfile } from "react-icons/cg" 

export default function Home() {
  return (
    <section>
      <h1 className="font-bold text-3xl">
        Hi
        <br />
        I&apos;m {profile.name}
      </h1>
      <p className="font-bold text-2xl my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
      {profile.jobTitle}
      </p>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {profile.description}
      </p>
    </section>
  );
}
