export const getMoviesQuery = `
  *[_type == "movie"] {
    title,
    'slug': slug.current,
    overview,
    releaseDate
  }
`;