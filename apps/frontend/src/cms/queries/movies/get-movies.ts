const getMoviesQuery = `
  *[_type == "movie"] {
    title,
    'slug': slug.current,
    overview,
    releaseDate,
    'poster': {
      ...poster,
      'asset': poster.asset->
    }
  }
`;

export {getMoviesQuery}