import type { Movie } from "../types/Movie";
import { MovieExtraData } from "../types/MovieExtraData";
import { FaStar, FaPlusCircle } from "react-icons/fa";

export default async function MovieCard({
  movie,
  type,
}: {
  movie: Movie;
  type: "add" | "remove";
}) {
  try {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=f397039a&i=${movie.imdbID}`
    );
    const movieExtraData: MovieExtraData = await res.json();
    return (
      <article className="flex mb-10">
        <img
          src={movieExtraData.Poster}
          alt={`Poster of ${movie.Title}`}
          className="object-cover h-60 w-auto"
        />
        <div className="p-4 flex flex-col gap-2">
          <div className="flex gap-4 items-center">
            <h2 className="text-2xl">{movie.Title}</h2>
            <p className="flex items-center gap-2">
              <FaStar className="text-amber-400" />
              {movieExtraData.imdbRating}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p>{movieExtraData.Runtime}</p>
            <p>{movieExtraData.Genre}</p>

            <button className="flex items-center gap-2 font-medium text-lg">
              <FaPlusCircle />
              Watchlist
            </button>
          </div>
          <p className="text-neutral-800 text-lg">{movieExtraData.Plot}</p>
        </div>
      </article>
    );
  } catch (error) {
    return null;
  }
}
