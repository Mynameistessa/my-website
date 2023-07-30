import React from 'react';
import { getSortedPostsData } from '@/lib/posts';
import ListItem from './ListItem';

const components: React.FC = () => {
  const posts = getSortedPostsData();
  return (
    <section className='m-8'>
      <h2 className='font-bold text-2xl'>Blog Posts</h2>
      <ul className='w-full'>
        {posts.map(post => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};

export default components; 