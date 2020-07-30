import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import styled from "styled-components"
import { FaGithub, FaLink, FaPython } from "react-icons/fa";
import { DiReact } from "react-icons/di"
import GatsbyImg from "../img/gatsby.svg";
import GraphQLImg from "../img/graphql.svg";
import JavaScriptImg from "../img/javascript.svg";
import MarkdownImg from "../img/markdown.svg";
import MongoDBImg from "../img/mongodb.svg";
import NodeImg from "../img/node.svg";
import SQLiteImg from "../img/sqlite.svg";
import FlaskImg from "../img/flask.svg";
import { rhythm } from "../utils/typography"


const ProjectWrapper = styled.div`
  // background-color: red;
  box-shadow: 10px 10px 20px #a7abab;
  padding: ${rhythm(1)} ${rhythm(1)} 0;
  margin-bottom: ${rhythm(2)};
  .Subtitle{
    display: flex;
    .ProjectLinks {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      margin: 0;
      li {
        list-style-type:none;
        a svg{
          height: 40px;
          width: 40px;
          margin-left: ${rhythm(1)};
        }
      }
    }
  }
  
`
const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-flow: row wrap;
  .projpicture {
    display: flex;
    flex-shrink: 0;
    margin-right: 2vw;
    margin-bottom: ${rhythm(1)};
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    flex: 1 1 600px;
    min-width: 100px;
    font-size: 16px;
  }


  .TechLinks{
    display: flex;
    flex-direction: row;
    margin: 0;
    li {
      list-style-type:none;
      margin-right: ${rhythm(.3)};
      svg {
        margin-top: ${rhythm(.2)};
        height: 50px ;
        width: 50px ;
      }
      a {
        .regular img{
            height: 40px;
            width: 40px;
            margin-top: ${rhythm(.4)};
        }
        .styledcomp{
          margin-top: ${rhythm(.2)};
          width: 45px;
        }
        .express{
          // height: 30px;
          margin-top: ${rhythm(.8)};
          width: 75px !important;
          img{
            
            margin-bottom: 0;
          }
        }
        .small img{
            width: 70px;
            height: 70px;
        }
        .sqlite img{
          width: 90px;
          height: 50px;
        }
        .flask img{
          width: 50px;
          height: 50px;
        }
      }
      
    }
  }


`

export default ({ data }) => {
  const {
    P1Name,
    P1Descript,
    P1GitHubLink,
    P1Link,
    P2Name,
    P2Descript,
    P2GitHubLink,
    P2Link,
    P3Name,
    P3Descript,
    P3GitHubLink,
    P3Link,
    P4Name,
    P4Descript
  } = data.allMarkdownRemark.edges[0].node.frontmatter
  return (
    <Layout>
      <ProjectWrapper>
        <div className="Subtitle">
          <h1> {P4Name} </h1>
        </div>
        <InfoWrapper>
          <Img
            title="Badger"
            alt="Badger"
            fixed={data.BadgerImg.childImageSharp.fixed}
            className="projpicture"
          />
          <div className="info">
            {P4Descript}
            <br /> <br />
            Technologies Used:
            <ul className="TechLinks">
              <li>
                <a
                  target="_blank"
                  href="https://www.reactjs.org/"
                  rel="noopener"
                  aria-label="React.js"
                >
                  <DiReact />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.python.org/"
                  rel="noopener"
                  aria-label="Python"
                >
                  <FaPython />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://flask.palletsprojects.com/en/1.1.x/"
                  rel="noopener"
                  aria-label="Flask"
                >
                  <div className="flask">
                    <img
                      src={FlaskImg}
                      title="Flask"
                      alt="Flask"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.sqlite.org/index.html"
                  rel="noopener"
                  aria-label="SQLite"
                >
                  <div className="sqlite">
                    <img
                      src={SQLiteImg}
                      title="SQLite"
                      alt="SQLite"
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </InfoWrapper>
      </ProjectWrapper>
      <ProjectWrapper>
        <div className="Subtitle">
          <h1> {P1Name} </h1>
          <ul className="ProjectLinks">
            <li>
              <a
                target="_blank"
                href={P1GitHubLink}
                rel="noopener"
                aria-label="The Github page"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={P1Link}
                rel="noopener"
                aria-label="Website URL"
              >
                <FaLink />
              </a>
            </li>
          </ul>
        </div>
        <InfoWrapper>
          <Img
            title="Personal Website"
            alt="Personal Website"
            fixed={data.Website.childImageSharp.fixed}
            className="projpicture"
          />
          <div className="info">
            {P1Descript}
            <br /> <br />
            Technologies Used:
            <ul className="TechLinks">
              <li>

                <a
                  target="_blank"
                  href="https://www.gatsbyjs.org/"
                  rel="noopener"
                  aria-label="Gatsby"
                >
                  <div className="regular">
                    <img
                      src={GatsbyImg}
                      title="Gatsby"
                      alt="Gatsby"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.reactjs.org/"
                  rel="noopener"
                  aria-label="React.js"
                >
                  <DiReact />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.nodejs.org/"
                  rel="noopener"
                  aria-label="Node.js"

                >
                  <div className="small">
                    <img
                      src={NodeImg}
                      title="Node"
                      alt="Node"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://styled-components.com/"
                  rel="noopener"
                  aria-label="styled-components"
                >
                  <Img
                    title="styled-components"
                    alt="styled-components"
                    fluid={data.StyledCompImg.childImageSharp.fluid}
                    className="styledcomp"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.markdownguide.org/"
                  rel="noopener"
                  aria-label="Markdown"
                >
                  <div className="regular">
                    <img
                      src={MarkdownImg}
                      title="Markdown"
                      alt="Markdown"
                    />
                  </div>
                </a>

              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.graphql.org/"
                  rel="noopener"
                  aria-label="Markdown"
                >
                  <div className="regular">
                    <img
                      src={GraphQLImg}
                      title="GraphQL"
                      alt="GraphQL"
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </InfoWrapper>
      </ProjectWrapper>
      <ProjectWrapper>
        <div className="Subtitle">
          <h1>{P2Name}</h1>

          <ul className="ProjectLinks">
            <li>
              <a
                target="_blank"
                href={P2GitHubLink}
                rel="noopener"
                aria-label="The Github page"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={P2Link}
                rel="noopener"
                aria-label="Website URL"
              >
                <FaLink />
              </a>
            </li>
          </ul>
        </div>
        <InfoWrapper>
          <Img
            title="Dayly"
            alt="Dayly"
            fixed={data.Dayly.childImageSharp.fixed}
            className="projpicture"
          />

          <div className="info">
            {P2Descript}
            <br /> <br />
            Technologies Used:
            <ul className="TechLinks">
              <li>
                <a
                  target="_blank"
                  href="https://www.reactjs.org/"
                  rel="noopener"
                  aria-label="React"
                >
                  <DiReact />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.nodejs.org/"
                  rel="noopener"
                  aria-label="Node"
                >
                  <div className="small">
                    <img
                      src={NodeImg}
                      title="Node"
                      alt="Node"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://expressjs.com/"
                  rel="noopener"
                  aria-label="express"
                >
                  <Img
                    title="express"
                    alt="express"
                    fluid={data.ExpressImg.childImageSharp.fluid}
                    className="express"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.mongodb.com/"
                  rel="noopener"
                  aria-label="MongoDB"

                >
                  <div className="small">
                    <img
                      src={MongoDBImg}
                      title="MongoDB"
                      alt="MongoDB"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.javascript.com/"
                  rel="noopener"
                  aria-label="JavaScript"
                >
                  <div className="regular">
                    <img
                      src={JavaScriptImg}
                      title="Javascript"
                      alt="JavaScript"
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </InfoWrapper>
      </ProjectWrapper>
      <ProjectWrapper>
        <div className="Subtitle">
          <h1>{P3Name}</h1>
          <ul className="ProjectLinks">
            <li>
              <a
                target="_blank"
                href={P3GitHubLink}
                rel="noopener"
                aria-label="The Github page"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={P3Link}
                rel="noopener"
                aria-label="Website URL"
              >
                <FaLink />
              </a>
            </li>
          </ul>
        </div>
        <InfoWrapper>
          <Img
            title="Chip"
            alt="Chip"
            fixed={data.Chip.childImageSharp.fixed}
            className="projpicture"
          />

          <div className="info">
            {P3Descript}
            <br /> <br />
            Technologies Used:
            <ul className="TechLinks">
              <li>
                <a
                  target="_blank"
                  href="https://www.reactjs.org/"
                  rel="noopener"
                  aria-label="React"
                >
                  <DiReact />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.nodejs.org/"
                  rel="noopener"
                  aria-label="Node"
                >
                  <div className="small">
                    <img
                      src={NodeImg}
                      title="Node"
                      alt="Node"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://expressjs.com/"
                  rel="noopener"
                  aria-label="express"
                >
                  <Img
                    title="express"
                    alt="express"
                    fluid={data.ExpressImg.childImageSharp.fluid}
                    className="express"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.mongodb.com/"
                  rel="noopener"
                  aria-label="MongoDB"
                >
                  <div className="small">
                    <img
                      src={MongoDBImg}
                      title="MongoDB"
                      alt="MongoDB"
                    />
                  </div>
                </a>
              </li>
              <li>

                <a
                  target="_blank"
                  href="https://www.javascript.com/"
                  rel="noopener"
                  aria-label="JavaScript"
                >
                  <div className="regular">
                    <img
                      src={JavaScriptImg}
                      title="Javascript"
                      alt="JavaScript"
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </InfoWrapper>
      </ProjectWrapper>
    </Layout >
  )
}

export const query = graphql`
  query {
        allMarkdownRemark(filter: {frontmatter: {P1Name: {eq: "Personal Website"}}}) {
        edges {
        node {
        frontmatter {
          P4Name
          P4Descript
        P1Name
            P1Descript
P1NameTechUsed
P1GitHubLink
P1Link
P2Name
P2Descript
P2NameTechUsed
P2GitHubLink
P2Link
P3Name
P3Descript
P3NameTechUsed
P3GitHubLink
P3Link
}
}
}
}
    Dayly: file(relativePath: {eq: "img/dayly.png" }) {
        childImageSharp {
        fixed(height: 320, width: 320) {
        ...GatsbyImageSharpFixed
      }
      }
  }
    Chip: file(relativePath: {eq: "img/chip.png" }) {
        childImageSharp {
        fixed(height: 320, width: 320) {
        ...GatsbyImageSharpFixed
      }
      }
  }
    Website: file(relativePath: {eq: "img/me.jpg" }) {
        childImageSharp {
        fixed(height: 320, width: 320) {
        ...GatsbyImageSharpFixed
      }
      }
    }
    ExpressImg: file(relativePath: {eq: "img/express.png" }) {
        childImageSharp {
          fluid(maxHeight: 50) {
          ...GatsbyImageSharpFluid
          }
      }
    }
    StyledCompImg: file(relativePath: {eq: "img/styledcomp.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
          }
      }
    }
    BadgerImg: file(relativePath: {eq: "img/badger.png" }) {
      childImageSharp {
        fixed(height: 300, width: 320) {
        ...GatsbyImageSharpFixed
      }
    }
}
  }
`