import React from 'react'
import { StaticQuery, Link } from "gatsby"
import styled from "styled-components"

const HeaderStyle = styled.header`
  top: 0px;
  width: 100%;
  z-index: 999;
  box-shadow: 0px 1px 2px #ccc;
  position:relative;
  .header-menu-logo{
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo{
    flex-basis:150px;
    border-bottom:none;
    img{
      width:100%;
      height:auto;
      display:flex;
      align-items:center;
    }
  }
  nav{
    flex-basis:calc(60% - 200px);
    display:flex;
    justify-content:flex-end;
  }
`;

const Header = () => (

    <StaticQuery
    query={graphql`
      query MenuQuery {
        site {
          siteMetadata {
              logo
            menuLinks{
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
      <Nav>
      <ul>
        <li><Link className="logo"to="/"><img src={logo} alt="logo" /></Link></li>
        {data.site.siteMetadata.menuLinks.map((menuitem, index) =>(
          <li key={index}><Link to={menuitem.link}>{menuitem.name}</Link></li>
        ))}
      </ul>
      </Nav>
    </>
    )}
    />
  )
  
  
  export default Header
  