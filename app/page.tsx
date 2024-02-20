import CV from "@/components/CV";
import Posts from "@/components/Posts";
import Intro from "@/components/Intro";
import ShowReel from "@/components/ShowReel";

export default function Home() {
  return (
    <main className="min-h-screen justify-between lg:p-20 p-4 dark:bg-black bg-white">
      <Intro />
      <ShowReel />
      {/* <CV /> */}
      <Posts />
    </main>
  );
}
