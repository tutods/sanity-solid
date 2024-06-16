import {useParams} from '@solidjs/router'

export default function MovieDetails() {
  const params = useParams<{slug: string}>()

  return <main>
    <p>This is the page.</p>
    <h1>{params.slug} Movie</h1>
  </main>
}