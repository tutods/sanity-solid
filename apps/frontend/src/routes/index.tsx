import {A, createAsync} from '@solidjs/router'
import Counter from '~/components/Counter'
import {getMovies} from '~/cms/services'
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
    <main class="mx-auto p-4 flex flex-col gap-4">
      <section>
        <h1 class={'text-3xl text-slate-900'}>Movies</h1>
        <p>List of popular movies.</p>
      </section>

      <Suspense fallback={<div>Loading....</div>}>
        <Show when={movies()}>
          <section class={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6'}>
            <For each={movies()}>
              {(movie) => {
                const imageUrl = urlFor(movie.poster)

                return (
                  <div
                    class={
                      'shadow-md font-sans flex flex-col gap-1 rounded-sm text-left'
                    }
                  >
                    <Image
                      loading="lazy"
                      class="w-full rounded-t aspect-square object-cover"
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
                    <section class={'p-4 flex-1'}>
                      <h2 class={'font-sans text-left text-xl font-semibold'}>{movie.title}</h2>
                      <div class={'line-clamp-3 text-sm'}>
                        <PortableText value={movie.overview} components={components} />
                      </div>


                      <a
                        class={'mt-4 inline-block py-1 font-semibold px-4 rounded border border-slate-900 text-slate-900 bg-transparent hover:bg-slate-900 hover:text-slate-50 transition-colors ease-in-out duration-150'}
                        href={`/movies/${movie.slug}`}>View Details</a>
                    </section>
                  </div>
                )
              }}
            </For>
          </section>
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
