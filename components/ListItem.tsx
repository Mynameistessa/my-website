import getFormattedDate from "@/lib/getFormattedDate"
import Link from "next/link"

type Props = {
  post: BlogPost
}

export default function ListItem({ post }: Props) {
  const { id, title, date } = post
  const formattedDate = getFormattedDate(date)

  return (
    <li className="mt-4 md:text-xl dark:text-white/90">
      <Link className="underline hover:text-black/70 dark:hover:text-gray-500 dark:text-white text-black" href={`/posts/${id}`}>
        {title}
      </Link>
      <br />
      <div>
        <p className="text-sm mt-1 dark:text-white text-black">{formattedDate}</p>
        <p className="text-sm mt-1 dark:text-white text-black">{post.readingTime} minute read</p>
      </div>
    </li>
  )
}