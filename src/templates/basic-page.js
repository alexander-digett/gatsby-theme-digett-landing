import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

export const BasicPageTemplate = ({
    title,
    content,
    slug,
  }) => {
    return (
        <div>
        <h1>{title}</h1>
        {content}
        </div>
    )
  }

const BasicPage = ({ data }) => {
    const { markdownRemark: post } = data
  
    return (
        <BasicPageTemplate
          content={post.html}
          frontmatter={post.frontmatter}
          title={post.frontmatter.title}
          slug={post.fields.slug}
        />
    )
  }

export default BasicPage

export const pageQuery = graphql`
  query BasicPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields{
        slug
      }
      frontmatter {
        title
      }
    }
  }
`