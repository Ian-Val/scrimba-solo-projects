import Image from "next/image";
import type { Post as PostType } from "../types/Post";
import { JSX } from "react";

export default function Post({ postData }: { postData: PostType }) {
  return (
    <article className="w-fit mx-auto">
      <header className="flex justify-start items-center p-4">
        <Image
          src={postData.avatar}
          alt=""
          width={128}
          height={128}
          className="rounded-full h-14 w-14 mr-4"
        />
        <div>
          <p className="font-bold text-lg">{postData.name}</p>
          <p>{postData.location}</p>
        </div>
      </header>
      <Image src={postData.post} alt="" width={1024} height={1024} />
      <footer>
        <div className="flex gap-4 p-4">
          <button aria-label="Like post.">
            <Image
              src="/images/instagram/icon-heart.png"
              alt=""
              width={128}
              height={128}
              className="h-10 w-10"
            />
          </button>
          <button aria-label="Comment on post.">
            <Image
              src="/images/instagram/icon-comment.png"
              alt=""
              width={128}
              height={128}
              className="h-10 w-10"
            />
          </button>
          <button aria-label="Share post.">
            <Image
              src="/images/instagram/icon-dm.png"
              alt=""
              width={128}
              height={128}
              className="h-10 w-10"
            />
          </button>
        </div>
        <p className="px-4 font-bold">{postData.likes} likes</p>
        <p className="p-4 font-bold">
          {postData.username}{" "}
          <span className="font-normal">{postData.comment}</span>
        </p>
      </footer>
    </article>
  );
}
