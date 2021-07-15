import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const blog = data.allMarkdownRemark
  return (
    <Layout>
      <Seo title="Home" />
      <div>
        <h4>{blog.totalCount} blogs</h4>
        {blog.edges.map(({ node }) => {
          return (
            <div key={node.id}>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
