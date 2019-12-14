import React from 'react'
import { graphql } from 'gatsby'

import Hero from '@/components/Homepage/Hero/Hero'
import About from '@/components/Homepage/About/About'
import Articles from '@/components/Homepage/Articles/Articles'
import Newsletter from '@/components/Newsletter/Newsletter'
import SEO from '@/components/SEO/SEO'

type ArticlesHighlited = {
  article_author: string
  article_description: string
  article_title: string
}

type ArticleSmall = {
  article_author: string
  article_page: string
  article_title: string
}

type IndexPageProps = {
  data: {
    prismicHomepage: {
      data: {
        hero_description: string
        hero_title: string
        about_kicker: string
        about_text: string
        about_title: string
        article_small: ArticleSmall[]
        article_highlighted: ArticlesHighlited[]
        articles_section_title: string
        newsletter_description: string
        newsletter_kicker: string
        newsletter_title: string
      }
    }
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const content = data.prismicHomepage.data

  return (
    <>
      <SEO
        title="Conversas em prol da humanidade"
        keywords={[`nevoazul`, `revista`, `minimalismo`]}
      />
      <Hero content={content} />
      <About content={content} />
      <Articles content={content} />
      <Newsletter content={content} />
    </>
  )
}

export const query = graphql`
  query Hero {
    prismicHomepage {
      data {
        hero_description
        hero_title
        about_kicker
        about_text
        about_title
        article_small {
          article_author
          article_page
          article_title
        }
        article_highlighted {
          article_author
          article_description
          article_title
        }
        articles_section_title
        newsletter_description
        newsletter_kicker
        newsletter_title
      }
    }
  }
`

export default IndexPage
