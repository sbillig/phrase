import React from 'react'
import { Spinner, Button, Container } from 'reactstrap'

import { useCreatedPhrases, useCreatedSentiments } from 'hooks/useEvents'
import { Phrase } from 'components/Phrase'
import { Sentiment } from 'components/Sentiment'

export default function Landing () {
  const createdPhrases = useCreatedPhrases()
  const createdSentiments = useCreatedSentiments()

  if (createdPhrases == null || createdSentiments == null) { return <Spinner type="grow" color="secondary" /> }

  return (
    <Container className="bg-light border" style={{ padding: '30px' }}>
      <h3 className="text-dark">Introduction</h3>
      <div className="text-secondary" style={{ fontSize: '18px' }}>
        <p>
          Phrase is a content publishing platform that builds a meaningful
          experience around direct funding. It does this by using a novel
          feature called <i>value-backed sentiment.</i>
        </p>
        <p>
          In the context of Phrase, the term <i>phrase</i> is used as an
          umbrella descriptor for digital content. This includes:
        </p>
        <ul>
          <li>Albums</li>
          <li>Videos</li>
          <li>Podcasts</li>
        </ul>
        <p>
          And may also be extended to things like:
        </p>
        <ul>
          <li>Political campaigns</li>
          <li>Open-source projects</li>
        </ul>
      </div>
      { createdPhrases.length !== 0 &&
        <>
          <p>
            <i>Here&apos;s an example of a phrase:</i>
          </p>
          <Phrase _key={ createdPhrases[0].phrase } />
        </>
      }
      <br />
      <div className="text-secondary" style={{ fontSize: '18px' }}>
        <p>
          Viewing phrases is free and you won&apos;t be pestered by ads here, but, if you
          would like, you can send cryptocurrency directly to the creator by
          purchasing a sentiment. If you do this, the sentiment will be dispayed
          on your profile in association with the phrase and your profile will be
          displayed on the phrase in association with the sentiment.
        </p>
      </div>
      { createdSentiments.length !== 0 &&
        <>
          <p>
            <i>Here&apos;s an example of a sentiment:</i>
          </p>
          <Sentiment _key={ createdSentiments[0].sentiment } />
        </>
      }
      <br />
      <div className="text-secondary" style={{ fontSize: '18px' }}>
        <p>
          The phrases you create and sentiments you express coalesce on your
          profile into something that demonstrates to people what it is you
          find meaningful, and, of course, as a biproduct of this, you are
          funding the work required to create meaningful things.
        </p>
      </div>
      <br />
      <Button color="primary" className="btn-lg">Get Started</Button>
    </Container>
  )
}
/*
export default function Landing () {
  const createdPhrases = useCreatedPhrases()

  if (createdPhrases == null) return <Spinner type="grow" color="secondary" />

  const feed = creatorToPhrasesList(createdPhrases).map(creatorAndPhrases => {
    return (
      <div key={ `profileActivity-${creatorAndPhrases.creator}` } style={{ marginBottom: '5px' }}>
        <ProfileActivity
          profile={ creatorAndPhrases.creator }
          createdPhrases={ creatorAndPhrases.phrases }
        />
      </div>
    )
  })

  return (
    <>
      <Subtle>----- New Phrases -----</Subtle>
      { feed }
    </>
  )
}
*/
