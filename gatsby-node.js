const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const slug = value.replace('/blog/', '').replace(/\/$/, '')
    const url = `/blog/${slug}`

    createNodeField({
      name: `slug`,
      node,
      value: url,
    })
  }
}

const path = require(`path`)

// 1. This is called once the data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ graphql, actions }) => {
  // 1.1 Getting the method to create pages
  const { createPage } = actions
  // 1.2 Tell which layout Gatsby should use to thse pages
  const blogLayout = path.resolve(`./src/components/BlogPost/BlogPost.tsx`)

  // 2 Return the method with the query
  return graphql(`
    query blogPosts {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
              author
              category
              tags
              featured
            }
            html
          }
        }
      }
    }
  `).then(result => {
    // 2.1 Handle the errors
    if (result.errors) {
      console.error(result.errors)
      reject(result.errors)
    }

    // 2.2 Our posts are here
    const posts = result.data.allMarkdownRemark.edges

    // 3 Loop throught all posts
    posts.forEach((post, index) => {
      // 3.1 Finally create posts
      createPage({
        path: post.node.fields.slug,
        component: blogLayout,
        context: {
          slug: post.node.fields.slug,
        },
      })
    })
  })
}
