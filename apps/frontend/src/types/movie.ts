import {SanityAssetDocument, SanityImageAssetDocument} from '@sanity/client'
import {PortableTextBlock} from '@portabletext/types'
import {PortableTextProps} from '@portabletext/solid'

type Movie = {
  title: string
  slug: string
  poster: SanityImageAssetDocument
  overview: PortableTextProps['value']
  releaseDate: Date
}

export type {Movie}