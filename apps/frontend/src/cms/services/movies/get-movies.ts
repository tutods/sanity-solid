import {client} from '~/cms'
import {getMoviesQuery} from '~/cms/queries'
import {cache} from '@solidjs/router'
import {Movie} from '~/types/movie'

const getMovies = cache(async (): Promise<Movie[]> => {
  'use server'

  try {
    return client.fetch<Movie[]>(getMoviesQuery)
  } catch (error) {
    console.error(error)
    return []
  }
}, 'movies')

export {getMovies}
