import {A} from '@solidjs/router'
import Counter from '~/components/Counter'
import {getMovie} from '~/utils/cms/services/movies/get-movie'
import {createResource, For, Match, Show, Suspense, Switch} from 'solid-js'

export default function Home() {
  const [movies] = createResource(getMovie)

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Hello world!</h1>
      <Counter />

      <Suspense fallback={<div>Loading....</div>}>
        <Show when={movies()}>
          <ul class={'grid grid-cols-4 gap-6'}>
            <For each={movies()}>
              {movie => (
                <li class={'shadow-md font-sans flex flex-col items-start p-4 rounded-sm'}>
                  <h2 class={'font-sans text-xl'}>{movie.title}</h2>
                  <p class={'font-sans text-sm'}>{movie.slug}</p>
                </li>
              )}
            </For>
          </ul>
        </Show>
      </Suspense>

      <p class="mt-8">
        Visit{' '}
        <a href="https://solidjs.com" target="_blank" class="text-sky-600 hover:underline">
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
