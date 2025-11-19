import type { Blog } from "../types/Blog";
import Image from "next/image";
import Link from "next/link";

export default function BlogPreview({ blog }: { blog: Blog }) {
  const imageSrc = blog.image;
  return (
    <article className="mb-4">
      <Image
        src={imageSrc || "/images/journal/placeholder.png"}
        alt=""
        width={300}
        height={200}
        className="aspect-[5/3] object-cover w-full"
      />
      <p className="uppercase text-xs font-semibold tracking-widest mt-2 mb-4 text-neutral-600 w-full">
        {new Date(blog.date).toLocaleDateString("en-US", {
          month: "long",
          day: "2-digit",
          year: "numeric",
        })}
      </p>
      <Link
        href={`/projects/learning-journal/blog/${blog.id}`}
        className="font-bold text-lg"
      >
        {blog.title}
      </Link>
      <p className="text-sm text-neutral-600">{blog.text}</p>
    </article>
  );
}
