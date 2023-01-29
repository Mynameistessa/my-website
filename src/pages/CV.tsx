
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { useTheme } from 'next-themes';
import { openInNewTab } from "../utils/newtab";
import Layout from "../components/Layout/layout";

const CV: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null;
  }

  return (
    <Layout>
      <div className="flex flex-row-reverse m-4">
        <Image
          src={theme === 'dark' ? '/linkedin-white.svg' : '/linkedin.svg'}
          alt="linkedin"
          width='45'
          height='45'
          onClick={() => openInNewTab('https://linkedin.com/in/tessabreen')}
          className="ml-2 cursor-pointer"
        />
        <Image
          src={theme === 'dark' ? '/github-white.svg' : '/github.svg'}
          alt="linkedin"
          width='45'
          height='45'
          onClick={() => openInNewTab('https://github.com/Mynameistessa')}
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-col ml-4 mr-4">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <tbody>
                  <tr className="border-b dark:border-platinum-grey border-wood hover:bg-warm-yellow hover:dark:bg-soft-blue">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white text-neutral-900">
                      <Image
                        src={theme === 'dark' ? '/unity-white.png' : '/Unity.png'}
                        alt="unity-technologies"
                        width='80'
                        height='80'
                        className="mr-8"
                      /></td>
                    <td className="text-sm  dark:text-white text-neutral-900 px-6 py-4 whitespace-nowrap">
                      Front-End Software Engineer
                    </td>
                    <td className="text-sm dark:text-white text-neutral-900 px-6 py-4 whitespace-nowrap">
                      2022 - Present
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="border-b dark:border-platinum-grey border-wood hover:bg-warm-yellow hover:dark:bg-soft-blue">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white text-neutral-900">
                      <Image
                        src={'/BBC.svg'}
                        alt="bbc-logo"
                        width='80'
                        height='80'
                        className="mr-8"
                      /></td>
                    <td className="text-sm dark:text-white text-neutral-900 px-6 py-4 whitespace-nowrap">
                      Full-Stack Software Engineer
                    </td>
                    <td className="text-sm dark:text-white text-neutral-900 px-6 py-4 whitespace-nowrap">
                      2020 - 2022
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="border-b dark:border-platinum-grey border-wood hover:bg-warm-yellow hover:dark:bg-soft-blue">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white text-neutral-900">
                      <Image
                        src={'/ICL.png'}
                        alt="imperial-college-london"
                        width='120'
                        height='120'
                      />
                    </td>
                    <td className="text-sm dark:text-white text-neutral-900 px-6 py-4 whitespace-nowrap">
                      Physics Graduate
                    </td>
                    <td className="text-sm dark:text-white text-neutral-900 px-6 py-4 whitespace-nowrap">
                      2014 - 2018
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CV;