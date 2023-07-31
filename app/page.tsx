import CV from '@/components/CV';
import Posts from "@/components/Posts";
import Intro from '@/components/Intro';

export default function Home() {
  return (
    <main className="min-h-screen justify-between p-24 dark:bg-slate-600 bg-white">
      <Intro />
      <Posts />
      <CV />
    </main>
  )
}
