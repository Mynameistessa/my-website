import getFormattedDate from '@/lib/getFormattedDate';
import { getPostData, getSortedPostsData } from '@/lib/posts'
import Link from 'next/link';
import { notFound } from "next/navigation"
import React from 'react'

export function generateStaticParams() {
  const posts = getSortedPostsData() // deduped

  return posts.map((post) => ({
    postId: post.id
  }))
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData(); // dedupes request if we already got the data
  const { postId } = params

  const post = posts.find(post => post.id === postId);

  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }
  return {
    title: post.title,
  }
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData(); // dedupes request if we already got the data
  const { postId } = params

  if (!posts.find(post => post.id === postId)) {
    notFound()
  }

  const { title, date, contentHtml, readingTime } = await getPostData(postId)

  const pubDate = getFormattedDate(date)

  return (
    <main className='px-6 dark:bg-black bg-seablue min-h-screen flex flex-col text-black dark:text-white'>
      <h1 className='text-3xl mt-4 mb-0'>{title}</h1>
      <p className='mt-0'>{pubDate} - {readingTime} minute read</p>
      <article className='text-justify text-sm md:text-base'>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <div className='font-body m-4 inline-block text-white btn rounded bg-sky-600 hover:bg-sky-800 px-6 leading-normal float-right'>
          <Link href="/">Back to home</Link>
        </div>
      </article>
    </main>
  )
}
