import NavBar from "./components/NavBar";
import Post from "./components/Post";
import posts from "@/src/data/posts.json";

export default function InstagramClonePage() {
  return (
    <>
      <NavBar />
      <main className="py-8">
        {posts.map((post) => (
          <Post key={post.post} postData={post} />
        ))}
      </main>
    </>
  );
}
