import React from "react";
import {Helmet} from "react-helmet";
import { StaticQuery, graphql } from 'gatsby'

const Layout = ({ children }) => (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              logo
            }
          }
        }
      `}
      render={data => (
        <>
        <Helmet>
            <meta charSet="utf-8" />
        </Helmet>
          <div>
          <PageTransition>
            {children}
          </PageTransition>
            <Footer />
            <Footercopy />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
          </div>
        </>
      )}
    />
  )
  
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  export default Layout