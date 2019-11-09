import React from 'react'
import { graphql } from 'gatsby'

export const BlogPost = ({ data }) => {
  const { markdownRemark } = data

  return (
    <>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <p>{markdownRemark.frontmatter.date}</p>
      <p>By {markdownRemark.frontmatter.author}</p>
      <p>In: {markdownRemark.frontmatter.category.join()}</p>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </>
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
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
