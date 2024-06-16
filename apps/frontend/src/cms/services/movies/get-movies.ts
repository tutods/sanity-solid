import {client} from '~/cms'
import {getMoviesQuery} from '~/cms/queries'
import {cache} from '@solidjs/router'

const getMovies = cache(async () => {
  "use server";

  try {
    return client.fetch(getMoviesQuery)
  } catch (error) {
    console.error(error)
    return []
  }
}, 'movies')

export {getMovies}
