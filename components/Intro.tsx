"use client";
import Image from "next/image";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="md:flex md:flex-cols justify-center text-sm pt-2 sm:mb-16 mb-2">
      <div className="overflow-hidden px-4 shrink-0 items-center flex flex-col self-center">
        <Image
          src="/me2.jpg"
          className="rounded-lg"
          alt="Avatar"
          width="200"
          height="400"
          priority
        />
      </div>
      <div className="md:w-2/4 text-base dark:text-white text-almost-black lg:text-left md:leading-loose self-center h-full">
        <h2 className="md:text-2xl text-xl font-bold">Hello</h2>
        <p className="leading-snug">
          I&apos;m a full-stack software engineer based in London, with a
          background in physics from Imperial College London. I enjoy working
          collaboratively to solve problems and learning new technologies. Take
          a look at my blog posts, where I share thoughts on recent topics I’ve
          been exploring in software development, as well as anything else I
          find interesting. For a detailed overview of my professional journey
          and experience, feel free to download my CV to learn more about my
          skills and achievements.
          <br />
          Check out my blogposts where I talk about recent topics I&apos;ve
          studied in software development and whatever I find interesting. For a
          comprehensive look at my professional journey and past experiences,
          feel free to{" "}
          <Link
            download
            href="/CV.pdf"
            className="link dark:text-brighton-blue text-sky-800"
          >
            download my CV
          </Link>{" "}
          to discover more about my skills and achievements.
        </p>
      </div>
    </div>
  );
};

export default Intro;
