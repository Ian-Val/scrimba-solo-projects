import NavBar from "./components/NavBar";
import Post from "./components/Post";
import posts from "@/src/data/posts.json";

export default function InstagramClonePage() {
  return (
    <>
      <NavBar />
      <main>
        {posts.map((post) => (
          <Post key={post.post} postData={post} />
        ))}
      </main>
    </>
  );
}
