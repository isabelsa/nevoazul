import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import { Display } from '../UI/index'

import * as S from './BlogPost.css'

export const BlogPost = ({ data }) => {
  const { markdownRemark } = data

  const isInterview = markdownRemark.frontmatter.isInterview

  return (
    <S.Wrapper>
      <S.Post>
        <S.PostIntroduction>
          <S.PostDetail>
            {markdownRemark.frontmatter.category.join(', ')}
          </S.PostDetail>
          <Display>{markdownRemark.frontmatter.title}</Display>
          <S.PostTags>
            {isInterview && (
              <>
                <S.Tags>
                  <S.PostDetail>Entrevistador</S.PostDetail>
                  <p>{markdownRemark.frontmatter.interviewer}</p>
                </S.Tags>

                <S.Tags>
                  <S.PostDetail>Fotografia</S.PostDetail>
                  <p>{markdownRemark.frontmatter.photographer}</p>
                </S.Tags>

                <S.Tags>
                  <S.PostDetail>Espaço</S.PostDetail>
                  <p>{markdownRemark.frontmatter.space}</p>
                </S.Tags>
              </>
            )}
            {!isInterview && (
              <>
                <S.Tags>
                  <S.PostDetail>Autor</S.PostDetail>
                  <p>{markdownRemark.frontmatter.author}</p>
                </S.Tags>
              </>
            )}
            <S.Tags>
              <S.PostDetail>No número</S.PostDetail>
              <p>{markdownRemark.frontmatter.inNumber}</p>
            </S.Tags>
          </S.PostTags>
        </S.PostIntroduction>
        <S.PostImage>
          <Img
            fluid={markdownRemark.frontmatter.image.childImageSharp.fluid}
            alt="This is a picture of my face."
          />
        </S.PostImage>

        <S.PostBody>
          <S.Body dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        </S.PostBody>
      </S.Post>
    </S.Wrapper>
  )
}

export default BlogPost

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        category
        interviewer
        photographer
        space
        inNumber
        isInterview
        image {
          childImageSharp {
            fluid(maxWidth: 700, quality: 75) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
