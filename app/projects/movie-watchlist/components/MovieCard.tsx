import type { Movie } from "../types/Movie";

export default async function MovieCard({ movie }: { movie: Movie }) {
  const res = await fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=f397039a&i=${movie.imdbID}`
  );

  const movieExtraData = await res.json();
  return (
    <article>
      <h2>{movie.Title}</h2>
      <p>{movie.Type}</p>
      <p>{movie.Year}</p>
      <p>{movie.imdbID}</p>
    </article>
  );
}
