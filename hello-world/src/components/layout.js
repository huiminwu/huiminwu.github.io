import React from "react"
import styled from "styled-components"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const Container = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  padding: ${rhythm(2)};
  padding-top: ${rhythm(1.5)};
`
const LinkContainer = styled.div`
  margin-bottom: ${rhythm(2)};
  display: flex;
  background-color: #f0f0f0;
  align-items: center;
`
const LinkLeftContainer = styled.div`
  padding: ${rhythm(.5)};
  display: flex;
  align-items: center;
`

const LinkRightContainer = styled.div`

  display: flex;
  margin-left:auto;
`

const LinkRight = styled.div`
  padding: ${rhythm(.5)}
`

const Name = styled.h3`
  font-style: normal;
  margin-bottom: 0;
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
      }
    `
  )
  return (
    <Container>
      <LinkContainer>
        <LinkLeftContainer>
          <Link to={`/`}>
            <Name>
              {data.site.siteMetadata.title}
            </Name>
          </Link>
        </LinkLeftContainer>
        <LinkRightContainer>
          <LinkRight>
            <Link to={`/`}>
              Home

            </Link>
          </LinkRight>
          <LinkRight>
            <Link
              to={`/about/`}
            >
              Projects
            </Link>
          </LinkRight>
        </LinkRightContainer>
      </LinkContainer>
      {children}
    </Container>
  )
}