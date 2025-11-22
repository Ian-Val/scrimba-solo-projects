import type { Movie } from "./types/Movie";
import MovieCard from "./components/MovieCard";
import { nanoid } from "nanoid";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const query = (await searchParams).q || "";

  let searchData: Movie[] = [];
  try {
    const res = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=f397039a&s=${query}&type=movie&plot-short`
    );

    const data = await res.json();

    if (data.Search) {
      searchData = data.Search;
    }
  } catch (error) {
    console.error(error);
  }

  return (
    <main className="px-10 ">
      <section>
        <form className="flex shadow-md rounded-lg items-center border-collapse -translate-y-1/2 z-10 h-15">
          <input
            aria-label="Type the name of the film you are searching for."
            type="text"
            name="q"
            id="search-bar"
            placeholder="e.g. Blade Runner"
            defaultValue={query}
            className="w-full h-full px-6 rounded-l-lg border-2 bg-white border-neutral-300 text-xl"
          />
          <button
            aria-label="Search."
            type="submit"
            className="active:bg-amber-400 hover:bg-amber-100 h-full bg-neutral-100 px-15 rounded-r-lg border-2 border-l-0 border-neutral-300 font-semibold text-xl tracking-wide"
          >
            Search
          </button>
        </form>
      </section>
      <section>
        {searchData.length > 0 ? (
          <ul>
            {searchData.map((movieData: Movie) => (
              <li key={nanoid()}>
                <MovieCard movie={movieData} />
              </li>
            ))}
          </ul>
        ) : null}
      </section>
    </main>
  );
}
