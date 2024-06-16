import {A, createAsync} from '@solidjs/router'
import Counter from '~/components/Counter'
import {getMovies} from '~/cms/services/movies/get-movies'
import {For, Show, Suspense} from 'solid-js'
import {urlFor} from '~/utils/url-for'
import {Image} from '~/components/common/image'
import {PortableText} from '@portabletext/solid'
import {components} from '~/cms/components/blocks'

export const route = {
  load: () => getMovies()
}

export default function Home() {
  const movies = createAsync(() => getMovies())

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Hello world!
      </h1>
      <Counter />

      <a href={`/movies/walle`}>view movie</a>

      <Suspense fallback={<div>Loading....</div>}>
        <Show when={movies()}>
          <ul class={'grid grid-cols-4 gap-6'}>
            <For each={movies()}>
              {(movie) => {
                const imageUrl = urlFor(movie.poster)

                return (
                  <li
                    class={
                      'shadow-md font-sans flex flex-col gap-1 p-4 rounded-sm text-left'
                    }
                  >
                    <Image
                      loading="lazy"
                      class="w-full rounded aspect-square object-cover"
                      src={imageUrl
                        .maxWidth(400)
                        .maxHeight(400)
                        .url()}
                      alt={movie.title}
                      loadingImage={imageUrl.size(120, 120).quality(70).blur(50).format('webp').url()}
                      srcset={`
                        ${imageUrl.width(78).url()} 78w,
                        ${imageUrl.width(120).url()} 120w,
                        ${imageUrl.maxWidth(400).maxHeight(400).url()} 400w,
                      `}
                    />
                    <h2 class={'font-sans text-left text-xl font-semibold'}>{movie.title}</h2>
                    <p class={'font-sans text-sm text-left'}>{movie.slug}</p>

                    <div class={'line-clamp-3'}>
                      <PortableText value={movie.overview} components={components} />
                    </div>

                    <a href={`/movies/${movie.slug}`}>View Details</a>
                  </li>
                )
              }}
            </For>
          </ul>
        </Show>
      </Suspense>

      <p class="mt-8">
        Visit{' '}
        <a
          href="https://solidjs.com"
          target="_blank"
          class="text-sky-600 hover:underline"
        >
          solidjs.com
        </a>{' '}
        to learn how to build Solid apps.
      </p>
      <p class="my-4">
        <span>Home</span>
        {' - '}
        <A href="/about" class="text-sky-600 hover:underline">
          About Page
        </A>{' '}
      </p>
    </main>
  )
}
