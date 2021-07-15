import React from "react"

import { graphql } from "gatsby"

export default function Blog({ path, data }) {
  console.log(data)
  const blog = data.markdownRemark

  return (
    <div>
      <div>Hello blog!</div>
      <div>
        <h1>{blog.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: blog.html }} />
      </div>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
