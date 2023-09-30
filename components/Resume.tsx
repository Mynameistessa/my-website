// import { gsap } from "gsap";

export const ExpandedCVRow = ({ company, role, duration, description, skills, index }:
  { company: string, role: string, duration: string, description: string[], skills: string[], index: string }) => {

  return (
    <div>
      <div className="selector grid grid-cols-3 items-center border-b dark:border-platinum-grey border-wood hover:dark:bg-slate-800 hover:bg-warm-yellow">
        <div className="basis-32 sm:px-6 py-2 whitespace-nowrap sm:text-m font-medium dark:text-white text-neutral-900">
          {company}
        </div>
        <div className="sm:text-m basis-72 dark:text-brick-red text-neutral-900 sm:px-6 sm:py-4 whitespace-nowrap font-bold">
          {role}
        </div>
        <div className="sm:visible text-m dark:text-platinum-grey text-neutral-900 whitespace-nowrap basis-5 ml-auto lg:mr-8">
          {duration}
        </div>
      </div>
      <div className={`description-${index} dark:text-white text-neutral-900 px-8 py-4 text-m max-w-200 break-words`}>
        <ol className="list-disc max-w-200 break-words">
          {description.map((sentence) => (
            <li>
              {sentence}
            </li>
          ))}
        </ol>
        <div className="xs:invisible flex dark:text-white text-neutral-900 flex-wrap items-end space-x-2 space-y-2 mb-4">
          {skills.map((skill) => (
            <span key={Math.random()} className="text-white inline-block whitespace-nowrap rounded-full bg-sky-800 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export const CVSmallRow = ({ company, role, duration, description, skills }:
  { company: string, role: string, duration: string, description: string[], skills: string[] }) => {
  return (
    <>
      <div className="grid grid-cols-3 items-center border-b dark:border-platinum-grey border-wood dark:bg-slate-800 bg-warm-yellow p-2">
        <div className="mr-2 whitespace-nowrap text-sm font-medium dark:text-white text-neutral-900">
          {company}
        </div>
        <div className="text-sm mr-2 dark:text-brick-red text-neutral-900 py-4 whitespace-nowrap font-bold">
          {role}
        </div>
        <div className="text-sm ml-auto dark:text-platinum-grey text-neutral-900 whitespace-nowrap ">
          {duration}
        </div>
      </div>
      <div className={`dark:text-white text-neutral-900 px-8 py-4 lg:text-m text-sm max-w-200 break-words`}>
        <ol className="list-disc max-w-200 break-words">
          {description.map((sentence) => (
            <li>
              {sentence}
            </li>
          ))}
        </ol>
        <div className="xs:invisible flex dark:text-white text-neutral-900 flex-wrap items-end space-x-2 space-y-2 mb-4">
          {skills.map((skill) => (
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-800 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">{skill}</span>
          ))}
        </div>
      </div>
    </>
  )
}

