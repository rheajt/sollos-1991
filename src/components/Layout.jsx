import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      starField: file(relativePath: { eq: "stars.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      sollos: file(relativePath: { eq: "sollos.png" }) {
        childImageSharp {
          fixed(quality: 90, width: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      year: file(relativePath: { eq: "1991-2.png" }) {
        childImageSharp {
          fixed(quality: 90, width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      baxter: file(relativePath: { eq: "baxter-wilson.png" }) {
        childImageSharp {
          fixed(quality: 90, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      jessica: file(relativePath: { eq: "jessica-stclair.png" }) {
        childImageSharp {
          fixed(quality: 90, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      matt: file(relativePath: { eq: "matt-kingsbury.png" }) {
        childImageSharp {
          fixed(quality: 90, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      morgan: file(relativePath: { eq: "morgan-blair.png" }) {
        childImageSharp {
          fixed(quality: 90, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <BackgroundImage Tag="div" fluid={data.starField.childImageSharp.fluid}>
      <Helmet title="Sollos 1991" />
      <GlobalStyles />

      <Main>
        <Header>
          <Img fixed={data.sollos.childImageSharp.fixed} />
          <Img fixed={data.year.childImageSharp.fixed} className="in-1991" />
        </Header>
        {children}
      </Main>
    </BackgroundImage>
  );
};

const StyledLayout = styled(Layout)`
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

const Main = styled.main`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas: 'header' 'footer';
`;

const Header = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
`;

export default StyledLayout;
