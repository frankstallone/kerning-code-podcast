import { useMemo } from 'react'
import Head from 'next/head'
import { parse } from 'rss-to-json'

import { useAudioPlayer } from '@/components/AudioProvider'
import { Container } from '@/components/Container'
import { FormattedDate } from '@/components/FormattedDate'
import { PlayButton } from '@/components/player/PlayButton'

export default function Episode({ episode }) {
  let date = new Date(episode.published)
  let audioPlayerData = useMemo(
    () => ({
      title: episode.title,
      audio: {
        src: episode.audio.src,
        type: episode.audio.type,
      },
      link: `/${episode.id}`,
    }),
    [episode]
  )
  let player = useAudioPlayer(audioPlayerData)

  const regex = /(<([^>]+)>)/gi
  const descriptionWithoutHtml = episode.description.replace(regex, '')

  function createMarkup() {
    return { __html: episode.description }
  }

  return (
    <>
      <Head>
        <title>{`${episode.title} - Kerning Code`}</title>
        <meta name="description" content={descriptionWithoutHtml} />
      </Head>
      <article className="py-16 lg:py-36">
        <Container>
          <header className="flex flex-col">
            <div className="flex items-center gap-6">
              <PlayButton player={player} size="large" />
              <div className="flex flex-col">
                <h1 className="mt-2 text-4xl font-bold text-cool-gray-900">
                  {episode.title}
                </h1>
                <FormattedDate
                  date={date}
                  className="order-first font-mono text-sm leading-7 text-cool-gray-500"
                />
              </div>
            </div>
            <p
              className="ml-24 mt-3 text-lg font-medium leading-8 text-cool-gray-700"
              dangerouslySetInnerHTML={createMarkup()}
            />
          </header>
        </Container>
      </article>
    </>
  )
}

export async function getStaticProps({ params }) {
  let feed = await parse('https://feeds.libsyn.com/435174/rss')

  let episode = feed.items
    .map(
      ({
        itunes_episode,
        title,
        description,
        content,
        enclosures,
        published,
      }) => ({
        id: itunes_episode.toString(),
        title: `${itunes_episode}: ${title}`,
        description,
        content,
        published,
        audio: enclosures.map((enclosure) => ({
          src: enclosure.url,
          type: enclosure.type,
        }))[0],
      })
    )
    .find(({ id }) => id === params.episode)

  if (!episode) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      episode,
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  let feed = await parse('https://feeds.libsyn.com/435174/rss')

  return {
    paths: feed.items.map(({ itunes_episode }) => ({
      params: {
        episode: itunes_episode.toString(),
      },
    })),
    fallback: 'blocking',
  }
}
