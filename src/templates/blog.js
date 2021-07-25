import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"

const Blog = ({
  data: {
    markdownRemark: { frontmatter, html }
  }
}) => {
  const image = frontmatter.featuredImage.childImageSharp.gatsbyImageData
  return (
    <Layout>
      <div>
        <div>Hello blog!</div>
        <div>
          <h1>{frontmatter.title}</h1>
          <GatsbyImage image={image} alt={frontmatter.title} />
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 200)
            # fluid(maxWidth: 800) {
            #   ...GatsbyImageSharpFluid
            # }
          }
        }
      }
    }
  }
`
