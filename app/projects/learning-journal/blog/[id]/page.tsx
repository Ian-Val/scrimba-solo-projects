import BlogPreview from "../../components/BlogPreview";
import type { Blog } from "../../types/Blog";
import blogsData from "@/src/data/blogs.json";
import Image from "next/image";

export default async function BlogPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const blog = blogsData.find((blog: Blog) => blog.id === parseInt(id));
  if (!blog) return <h1>Error: Blog not Found</h1>;
  return (
    <main>
      <section className="p-8 max-w-300 mx-auto">
        <p className="uppercase text-xs font-semibold tracking-widest mt-2 mb-4 text-neutral-600 w-full">
          {new Date(blog.date).toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          })}
        </p>
        <h2 className="font-bold text-4xl mb-4">{blog.title}</h2>
        <p className="leading-relaxed tracking-wider mb-8">{blog.text}</p>
        <Image
          className="aspect-[5/3] object-cover w-full"
          src={blog.image}
          alt=""
          width={300}
          height={200}
        />
        <p className="leading-relaxed tracking-wider my-8">{blog.body}</p>
      </section>
      <section>
        <h2 className="text-center block font-bold text-2xl">Recent Posts</h2>
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-8">
          {blogsData
            .filter((blog) => blog.id !== parseInt(id))
            .slice(0, 3)
            .map((blog: Blog) => (
              <li key={blog.id}>
                <BlogPreview blog={blog} />
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
}
