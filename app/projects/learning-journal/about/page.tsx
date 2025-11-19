import blogsData from "@/src/data/blogs.json";
import BlogPreview from "../components/BlogPreview";
import type { Blog } from "../types/Blog";
import Image from "next/image";

export default function JournalAboutPage() {
  return (
    <main>
      <section className="flex md:flex-row flex-col gap-8 p-8 items-center max-w-300 mx-auto">
        <Image
          src="/images/journal/ian-valeta.webp"
          alt="portrait of ian valeta"
          width={800}
          height={800}
          className="rounded-full w-50 h-50 aspect-square"
        />
        <div className="flex flex-col items-start justify-center gap-4">
          <h2 className="font-bold text-3xl ">
            Hi there! My name is Ian and welcome to my learning journal.
          </h2>
          <p className="max-w-200">
            After several months of learning in the Fullstack Developer Career
            Path, I've made the big jump over to the Bootcamp to get expert code
            reviews of my Solo Projects projects and meet like-minded peers.
          </p>
        </div>
      </section>
      <section className="md:px-20 px-8">
        <h3 className="font-bold text-xl my-3 max-w-200 mx-auto">
          How I stay committed to learning
        </h3>
        <p className="my-4 max-w-200 mx-auto">
          I like to think of myself as a lifelong learner. I used to spend hours
          and hours learning, then try to create simple projects using what I
          learned or work new techniques into existing projects.
        </p>
        <p className="my-4 max-w-200 mx-auto">
          While that was fun, I felt like it would be helpful to share what I
          was learning and most things about my journey with the world.
        </p>
        <h3 className="font-bold text-xl mb-3 mt-6 max-w-200 mx-auto">
          How I got started
        </h3>
        <p className="my-4 max-w-200 mx-auto">
          I started simple and gradually grew my learning journal site. I would
          take notes about what I was learning. After each learning session, I'd
          use my notes to not only reflect on what I learned but also write
          short summaries of what I learned using my own words.
        </p>
        <p className="my-4 max-w-200 mx-auto">
          That helped me grow what I was learning, and I realized that posting
          my learning summaries was also helping others learn and stay
          motivated.
        </p>
      </section>
      <section>
        <h2 className="text-center block font-bold text-2xl">Recent Posts</h2>
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-8">
          {blogsData.slice(0, 3).map((blog: Blog) => (
            <li key={blog.id}>
              <BlogPreview blog={blog} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
