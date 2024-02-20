import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./ListItem";

const Posts = () => {
  const posts = getSortedPostsData();
  return (
    <section className="mt-2">
      <h2 className="font-bold text-2xl dark:text-brighton-blue text-wood">
        Blog Posts
      </h2>
      <p className="dark:text-white text-base">
        These posts are written from the research I did in preparation for
        lightning talks.
      </p>
      <ul className="w-full text-center">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};

export default Posts;
