import axios from "axios";
import Hero from "../components/Hero";
import PopularMovie from "../components/PopularMovie";

export default function Home({ movies }) {
  return (
    <div className="bg-gray-700">
      <Hero />
      <PopularMovie movies={movies.results} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=pl-PL&page=1`
  );
  const movies = res.data;

  return {
    props: { movies },
  };
}
