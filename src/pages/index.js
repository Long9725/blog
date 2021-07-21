import * as React from "react"
import { Link, graphql } from "gatsby"

import { BgImage } from "gbimage-bridge"

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
                gatsbyImageData(width: 800)
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
// function splitTag(Tags) {
//   var arr_split_tag
//   var temp
//   if (Tags.length === 1) return Tags
//   else {
//     Tags.forEach(e => {
//       temp = "#" + e + " "
//       arr_split_tag.push(temp)
//       console.log(arr_split_tag)
//     })
//   }
//   return arr_split_tag
// }
const IndexPage = ({ data }) => {
  const blog = data.allMarkdownRemark
  return (
    <Layout>
      <Seo title="Home" />
      <div className={styles.container}>
        <div className={styles.item}>
          <Tags />
        </div>
        <div className={styles.item}>
          <h4>{blog.totalCount} blogs</h4>
          {blog.edges.map(({ node }) => {
            const image =
              node.frontmatter.featuredImage.childImageSharp.gatsbyImageData
            return (
              <div key={node.id} className={styles.post}>
                <BgImage image={image} className={styles.thumbnail}>
                  <div className={styles.thumbnailText}>
                    <h3>
                      <Link to={node.fields.slug}>
                        {node.frontmatter.title}
                      </Link>
                    </h3>
                    <p>{node.frontmatter.subtitle}</p>
                    <p>
                      {node.frontmatter.date} {node.frontmatter.tags}
                    </p>
                  </div>
                </BgImage>
              </div>
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
