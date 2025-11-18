"use client";

import blogsData from "@/src/data/blogs.json";
import BlogPreview from "./components/BlogPreview";
import type { Blog } from "./types/Blog";
import { useState } from "react";

export default function LearningJournalHomePage() {
  const [showAllBlogs, setAllBlogs] = useState(false);
  return (
    <>
      <main>
        <section className="text-white px-8 py-8 min-h-80 flex flex-col justify-end bg-[url(/images/journal/background.png)] bg-cover bg-center bg-blend-multiply bg-neutral-700">
          <p className="uppercase tracking-widest font-bold">
            {new Date("06-22-2003").toLocaleDateString("en-US", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            })}
          </p>
          <h2 className="text-3xl font-bold mt-3 mb-2">
            My new journal as a bootcamp student.
          </h2>
          <p className="max-w-130 leading-relaxed">
            After several months of learning in the Frontend Developer Career
            Path, I've made the big jump over to the Bootcamp to get expert code
            reviews of my Solo Projects projects and meet like-minded peers.
          </p>
        </section>
        <section>
          <ul className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-8">
            {(showAllBlogs ? blogsData : blogsData.slice(0, 6)).map(
              (blog: Blog) => (
                <li key={blog.id}>
                  <BlogPreview blog={blog} />
                </li>
              )
            )}
          </ul>
          {!showAllBlogs && (
            <button
              onClick={() => {
                setAllBlogs(true);
              }}
              className="mx-auto block mb-10 font-bold underline underline-offset-3 cursor-pointer"
            >
              View More
            </button>
          )}
        </section>
      </main>
    </>
  );
}
