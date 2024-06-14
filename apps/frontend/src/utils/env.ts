const env = {
  sanity: {
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    apiVersion: '2022-03-07',
  },
  isProduction: import.meta.env.NODE_ENV === 'production'
}

export {env}