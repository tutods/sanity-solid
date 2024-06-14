import blockContent from './others/blockContent'
import crewMember from './others/crewMember'
import castMember from './others/castMember'
import movie from './docs/movie'
import person from './docs/person'
import screening from './docs/screening'
import plotSummary from './others/plotSummary'
import plotSummaries from './others/plotSummaries'

export const schemaTypes = [
  // Document types
  movie,
  person,
  screening,

  // Other types
  blockContent,
  plotSummary,
  plotSummaries,
  castMember,
  crewMember,
]
