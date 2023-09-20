
export const ExpandedCVRow = ({ company, role, duration, description, skills }:
  { company: string, role: string, duration: string, description: string, skills: string[] }) => {
  return (
    <>
      <div className="flex items-center border-b dark:border-platinum-grey border-wood hover:dark:bg-slate-800 hover:bg-warm-yellow">
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
      <div className={`dark:text-white text-neutral-900 px-8 py-4 text-m max-w-200 break-words`}>
        <ol className="list-disc max-w-200 break-words">
          <li>
            {description}
          </li>
        </ol>
        <div className="xs:invisible flex dark:text-white text-neutral-900 flex-wrap items-end space-x-2 space-y-2 mb-4">
          {skills.map((skill) => (
            <span className="text-white inline-block whitespace-nowrap rounded-full bg-sky-800 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}

export const CVRow = ({ company, role, duration }: { company: string, role: string, duration: string }) => {
  return (
    <div className="flex items-center border-b dark:border-platinum-grey border-wood hover:dark:bg-slate-800 hover:bg-warm-yellow">
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
  )
}

