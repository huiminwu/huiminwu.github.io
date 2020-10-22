import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Img from "gatsby-image"
import { rhythm } from "../utils/typography"

import { FaGithub, FaLinkedin, FaFile } from "react-icons/fa";

const PageWrapper = styled.div`
  @keyframes profile {
    0% {
      clip-path: polygon(5% 3%, 96% 3%, 97% 93%, 11% 96%);
    }
    25% {
      clip-path: polygon(9% 4%, 99% 1%, 95% 97%, 7% 93%);
    }
    75% {
      clip-path: polygon(5% 6%, 93% 2%, 94% 94%, 13% 96%);
    }
    100% {
      clip-path: polygon(5% 3%, 96% 3%, 97% 93%, 11% 96%);
    }
  }
  .profile {
    border-radius: 50%;
    margin-bottom: ${rhythm(2)}
    position: relative;
  }

  .profile .profile-container {
    width: 320px;
    height: 320px;
    animation: profile infinite 5s;
    background: white;
  }

  .headline {
    margin-top: ${rhythm(2)}
  }
  .intro {
    .socialLinks {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      // width: 90vw;
      max-width: 350px;
      margin: 0;
      li {
        list-style-type:none;
        a svg{
          height: 45px;
          width: 45px;
        }
      }
    }
  }

`

export default ({ data }) => {
  const {
    githubURL,
    linkedinURL,
    resume,
  } = data.allMarkdownRemark.edges[0].node.frontmatter
  return (
    <Layout>
      <center>
        <div className="introName">
          <PageWrapper>
            <div class="profile">
              <div className="profile-container">
                <Img
                  title="Me"
                  alt="Hui Min Wu"
                  fluid={data.file.childImageSharp.fluid}
                />
              </div>
            </div>
            <h1 className="headline">
              Hi, I'm Hui Min Wu, a sophomore studying computer science at MIT!
            </h1>
            <br />
            <p>
              {data.allMarkdownRemark.edges[0].node.internal.content}
            </p>
            <div className="intro">
              <ul className="socialLinks">
                <li>
                  <a
                    target="_blank"
                    href={githubURL}
                    rel="noopener"
                    aria-label="My Github page"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href={linkedinURL}
                    rel="noopener"
                    aria-label="My Linkedin page"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href={resume}
                    rel="noopener"
                    aria-label="My resume"
                  >
                    <FaFile />
                  </a>
                </li>
              </ul>
            </div>
          </PageWrapper>
        </div>
      </center>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {name: {eq: "Hui Min Wu"}}}) {
      totalCount
      edges {
        node {
          frontmatter {
            name
            githubURL
            linkedinURL
            resume
          }
          internal {
            content
          }
        }
      }
    }
    file(relativePath: { eq: "img/me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
