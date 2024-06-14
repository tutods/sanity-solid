import { client } from "~/cms";
import { getMoviesQuery } from "~/cms/queries/movie";

const getMovie = async () => {
  try {
    const movies = await client.fetch(getMoviesQuery);
    console.log(movies, "<|");

    return movies;
  } catch (error) {
    console.log(error, "<- error");
    throw new Error(error?.toString() ?? "--");
  }
};
export { getMovie };
