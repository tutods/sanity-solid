import {SanityAssetDocument, SanityImageAssetDocument} from '@sanity/client'
import {PortableTextBlock} from '@portabletext/types'
import {PortableTextProps} from '@portabletext/solid'

type Movie = {
  title: string
  slug: string
  poster: SanityImageAssetDocument
  overview: PortableTextProps['value']
  releaseDate: Date
  externalId: number
  popularity: number
  castMembers: unknown[]
  crewMembers: unknown[]
}

type MoviesList = Pick<Movie, 'title' | 'slug' | 'poster' | 'overview' | 'releaseDate'>[]

export type {Movie, MoviesList}