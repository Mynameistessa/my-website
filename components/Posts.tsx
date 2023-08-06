import { getSortedPostsData } from '@/lib/posts';
import ListItem from './ListItem';

export default function Posts() {
  const posts = getSortedPostsData();
  return (
    <section className='mb-16'>
      <h2 className='font-bold text-2xl dark:text-purple-500 text-pink-400'>Blog Posts</h2>
      <ul className='w-full '>
        {posts.map(post => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};
