import {client} from '~/cms'
import {getMoviesQuery} from '~/cms/queries/movie'
import {cache} from '@solidjs/router'

const getMovies = cache(async () => {
  try {
    const movies = await client.fetch(getMoviesQuery)

    return movies
  } catch (error) {
    console.error(error)
    return []
  }
}, 'movies')

export {getMovies}
