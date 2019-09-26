
export function unique (l) {
  return Array.from(new Set(l))
}

export function sentimentToPhrasesMap (expressedSentiments) {
  const map = {}

  expressedSentiments.forEach(expressedSentiment => {
    if (map[expressedSentiment.sentiment] === undefined) {
      map[expressedSentiment.sentiment] = [expressedSentiment.phrase]
    } else {
      map[expressedSentiment.sentiment].push(expressedSentiment.phrase)
    }
  })

  return map
}

export function sentimentToPhrasesList (expressedSentiments) {
  const map = sentimentToPhrasesMap(expressedSentiments)
  return Object.keys(map).map(key => {
    return {
      sentiment: key,
      phrases: map[key]
    }
  })
}

export function creatorToPhrasesMap (createdPhrases) {
  const map = {}

  createdPhrases.forEach(createdPhrase => {
    if (map[createdPhrase.creator] === undefined) {
      map[createdPhrase.creator] = [createdPhrase.phrase]
    } else {
      map[createdPhrase.creator].push(createdPhrase.phrase)
    }
  })

  return map
}

export function creatorToPhrasesList (createdPhrases) {
  const map = creatorToPhrasesMap(createdPhrases)
  return Object.keys(map).map(key => {
    return {
      creator: key,
      phrases: map[key]
    }
  })
}

export function sentimentToExpressorsMap (expressedSentimentsExt) {
  const map = {}

  expressedSentimentsExt.forEach(es => {
    if (map[es.sentiment] === undefined) {
      map[es.sentiment] = [es.expressor]
    } else {
      map[es.sentiment].push(es.expressor)
    }
  })

  return map
}

export function sentimentToExpressorsList (expressedSentimentsExt) {
  const map = sentimentToExpressorsMap(expressedSentimentsExt)
  return Object.keys(map).map(key => {
    return {
      sentiment: key,
      expressors: map[key]
    }
  })
}
