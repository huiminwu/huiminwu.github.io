import React from "react"
import styled from "styled-components"
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { rhythm } from "../utils/typography"

const Container = styled.div`
  .cont{
    margin: 0 auto;
    max-width: 1600px;
    padding: ${rhythm(1.5)} ${rhythm(2)};
  
  }

  .links{
    display: flex;
    margin-left:auto;
    .linkRight{
      a{
        padding: ${rhythm(.5)} ${rhythm(.5)} ${rhythm(.5)};
        margin-right: ${rhythm(.5)};
        .active{
          background-color: #f0fdff;
        }
      }
      a:hover{
        background-color: #f0fdff;
        -webkit-transition: background-color 320ms linear;
        -ms-transition: background-color 320ms linear;
        transition: background-color 320ms linear;
      }

      
    }
  }

  @media all and (max-width: 1200px){
    div.projpicture{
      display: none !important;
    }
    ul.ProjectLinks{
      margin-left: auto !important;
    }
  }


  @media all and (max-width: 600px) {
    a:hover{
      background-color: transparent !important;
    }
    p, a {
      font-size: 12px;
    }
    h1, h2 {
      font-size: 14px;
    }

    div.cont{
      padding: ${rhythm(1)} ${rhythm(1)};
    }
    div.intro{
      img, svg {
        width: 20px !important;
        height: 20px !important;
      }
    }

    div.profile {
      border-radius: 50%;
      margin-bottom: ${rhythm(1)}
      position: relative;
    }
  
    div.profile div.profile-container {
      width: 200px;
      height: 200px;
      animation: profile infinite 5s;
      background: white;
    }
    div.info{
      font-size: 12px;
    }
    div.Subtitle svg{
      width: 20px !important;
      height: 20px !important;
    }

  }
  @media all and (max-width: 400px) {
    div.logo{
      display: none;
    }
    div.links{
      margin-left: auto;
      margin-right: auto;
      // align-items: center;
    }
  }
`
const LinkContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2; 
  margin-bottom: ${rhythm(2)};
  display: flex;
  background-color: #f0f0f0;
  align-items: center;
`
const LinkLeftContainer = styled.div`
  padding: ${rhythm(.5)};
  display: flex;
  align-items: center;
  a {
    height: 60px;
    width: 60px;
  }
  img {
    margin-bottom: 0;
  }
`


export default ({ children }) => {


  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        file(relativePath: { eq: "img/icon.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return (
    <Container>
      <div className="cont">
        <LinkContainer>
          <div className="logo">
            <LinkLeftContainer>

              <Link to={`/`} style={{ textDecoration: "none" }}>


                <Img
                  title="Logo"
                  alt="Hui Min Wu's Logo"
                  fixed={data.file.childImageSharp.fixed}>
                </Img>

              </Link>

            </LinkLeftContainer>
          </div>
          <div className="links">
            <div className="linkRight">
              <Link to={`/`} style={{ textDecoration: "none" }}>
                Home

                </Link>
            </div>
            <div className="linkRight">
              <Link
                to={`/projects/`}
                style={{ textDecoration: "none" }}
              >
                Projects

                </Link>
            </div>
            <div className="linkRight">
              <Link
                to={`/contact/`}
                style={{ textDecoration: "none" }}
              >
                Contact
                </Link>
            </div>
          </div>
        </LinkContainer>
        {children}
      </div>
    </Container >
  )
}