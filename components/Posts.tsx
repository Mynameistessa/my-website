import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./ListItem";

const Posts = () => {
  const posts = getSortedPostsData();
  return (
    <section className="mt-2">
      <h2 className="font-bold text-xl md:text-2xl dark:text-brighton-blue text-wood">
        Blog Posts
      </h2>
      <p className="dark:text-white text-base">
        These posts are written from the research I did in preparation for
        lightning talks.
      </p>
      <div className="h-96 overflow-y-scroll">
        <ul className="text-center ">
          {posts.map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Posts;
