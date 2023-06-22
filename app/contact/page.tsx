import { BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <h1 className="font-bold text-3xl text-center">Contact</h1>
      <div className="flex justify-center gap-10 py-10">
        <a
          href="https://www.linkedin.com/in/tomer-avish-68018322b/"
          target="_blank"
        >
          <BsLinkedin size={60} />
        </a>
        <a href="https://github.com/TA-CodeProjects/" target="_blank">
          <BsGithub size={60} />
        </a>
      </div>
    </>
  );
};

export default Contact;
