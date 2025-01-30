import { Config } from "@/lib/data";
import { getYearsOfExperience } from "@/lib/utils";

function About() {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="text-sm">About</h3>{" "}
      <p className="font-light text-sm dark:text-zinc-500 text-primary/80 text-justify">
        Hello, I'm Roxanne, an experienced{" "}
        <span className="dark:text-white  text-primary font-medium">
          HR Generalist
        </span>{" "}
        with a strong background in HR operations, client relations, and administrative support. With over {getYearsOfExperience(Config.yearStart)} years of experience
        , I specialize in employee relations, compensation & benefits, HRIS management, and HMO administration.</p>
      <p className="font-light text-sm dark:text-zinc-500  text-primary/80  text-justify">
        I'm currently in the{" "}
        <span className="dark:text-white  text-primary font-medium">
          Philippines
        </span>
        , I have worked primarily with tech companies, managing day-to-day HR operations,
        onboarding, event organization, and benefits administration.
        I take pride in creating efficient systems that not only enhance productivity but also contribute to employee satisfaction and engagement.
      </p>
    </section>
  );
}

export default About;





