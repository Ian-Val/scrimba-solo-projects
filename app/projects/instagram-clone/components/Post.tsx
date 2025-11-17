import Image from "next/image";
import type { Post as PostType } from "../types/Post";

export default function Post() {
  return (
    <>
      {/* <article>
        <header>
          <Image src={post.avatar} alt="" width={128} height={128} />
          <div>
            <p>{user.name}</p>
            <p>{post.location}</p>
          </div>
        </header>
        <Image src={post.photo} alt="" width={1024} height={1024} />
        <footer>
          <div>
            <button aria-label="Like post.">
              <Image
                src="/images/instagram/icon-heart.png"
                alt=""
                width={128}
                height={128}
              />
            </button>
            <button aria-label="Comment on post.">
              <Image
                src="/images/instagram/icon-comment.png"
                alt=""
                width={128}
                height={128}
              />
            </button>
            <button aria-label="Share post.">
              <Image
                src="/images/instagram/icon-dm.png"
                alt=""
                width={128}
                height={128}
              />
            </button>
          </div>
          <p>{post.likes} likes</p>
          <p>
            {user.handle} <span>{post.comment}</span>
          </p>
        </footer>
      </article> */}
    </>
  );
}
