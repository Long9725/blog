import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Tags from "../components/tags"
import ProfileBox from "../components/profile.box"

import * as styles from "./css/index.module.css"

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            subtitle
            date(formatString: "DD MMMM, YYYY")
            tags
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 150)
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
function splitTag(Tags) {
  var arr_split_tag = []
  var temp = ""

  Tags.forEach(e => {
    temp = "#" + e + " "
    arr_split_tag.push(temp)
    console.log(arr_split_tag)
  })

  return arr_split_tag
}

function IndexPage({ data }) {
  const blog = data.allMarkdownRemark
  return (
    <Layout>
      <Seo title="Home" />
      <div className={styles.container}>
        <div className={styles.item}>
          <Tags />
        </div>
        <div className={styles.item}>
          {blog.edges.map(({ node }) => {
            const image =
              node.frontmatter.featuredImage.childImageSharp.gatsbyImageData
            return (
              <Link to={node.fields.slug}>
                <div key={node.id} className={styles.post}>
                  <GatsbyImage
                    image={image}
                    alt=""
                    className={styles.thumbnail}
                  />
                  <div className={styles.thumbnailText}>
                    <h3>{node.frontmatter.title}</h3>
                    <p>{node.frontmatter.subtitle}</p>
                    <p>
                      {splitTag(node.frontmatter.tags)}
                      <span style={{ float: "right" }}>
                        {node.frontmatter.date}
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
        <div className={styles.item}>
          <ProfileBox className={styles.item} />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
