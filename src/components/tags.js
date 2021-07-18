import * as React from "react"
import kebabCase from "lodash/kebabCase"
import { StaticQuery, Link, graphql } from "gatsby"

export default function Tags() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
        }
      `}
      render={data => (
        <div>
          <h4>{data.allMarkdownRemark.group.totalCount} tags</h4>
          <ul>
            {data.allMarkdownRemark.group.map(category => (
              <li key={category.fieldValue}>
                <Link to={`/tags/${kebabCase(category.fieldValue)}/`}>
                  {category.fieldValue} ({category.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    />
  )
}
