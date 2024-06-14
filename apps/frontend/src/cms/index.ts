import {createClient} from '@sanity/client'
import {env} from '~/utils/env'

const client = createClient({
  projectId: env.sanity.projectId,
  dataset: env.sanity.dataset,
  useCdn: env.isProduction,
  apiVersion: env.sanity.apiVersion,
});

export {client}