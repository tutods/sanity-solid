import {client} from '~/cms'
import {getMoviesQuery} from '~/cms/queries'
import {cache} from '@solidjs/router'
import {Movie, MoviesList} from '~/types/movie'

const getMovies = cache(async (): Promise<MoviesList> => {
  'use server'

  try {
    return client.fetch<MoviesList>(getMoviesQuery)
  } catch (error) {
    console.error(error)
    return []
  }
}, 'movies')

export {getMovies}
