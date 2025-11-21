"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type KnownPaths =
  | "/projects/movie-watchlist"
  | "/projects/movie-watchlist/watchlist";

export default function HeaderWrapper() {
  const pathname = usePathname() as string;

  const titleLUT: Record<KnownPaths, string> = {
    "/projects/movie-watchlist": "Find your film",
    "/projects/movie-watchlist/watchlist": "My Watchlist",
  };

  const linkLUT: Record<KnownPaths, KnownPaths> = {
    "/projects/movie-watchlist": "/projects/movie-watchlist/watchlist",
    "/projects/movie-watchlist/watchlist": "/projects/movie-watchlist",
  };

  const title = titleLUT[pathname as KnownPaths];
  const href = linkLUT[pathname as KnownPaths];
  const linkText = titleLUT[href as KnownPaths];

  return (
    <header className="bg-[url(/images/movies/hero-banner.png)] bg-cover bg-center bg-fixed bg-black/85 bg-blend-multiply text-white p-10 flex justify-between items-center min-h-60">
      <h1 className="font-bold text-5xl tracking-wide">{title}</h1>
      <Link
        className="active:text-amber-400 hover:text-amber-100 font-semibold text-lg"
        href={href}
      >
        {linkText}
      </Link>
    </header>
  );
}
