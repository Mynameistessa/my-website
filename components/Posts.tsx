import { getSortedPostsData } from '@/lib/posts';
import ListItem from './ListItem';

const Posts = () => {
  const posts = getSortedPostsData();
  return (
    <section className='mb-16'>
      <h2 className='font-bold text-2xl dark:text-warm-yellow text-pink-400'>Blog Posts</h2>
      <p>These posts are written from the research I did in preparation for lightning talks I presented while working at Unity Technologies.</p>
      <ul className='w-full '>
        {posts.map(post => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};

export default Posts;