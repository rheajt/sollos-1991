import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import { Link } from 'gatsby';

const colors = ['#fa00e5', '#003efa', '#fac000', '#ff0000'];

const ImageLink = ({ to, fixed, color }) => (
  <Link to={to}>
    <Img
      fixed={fixed}
      style={{ overflow: 0 }}
      imgStyle={{ filter: `drop-shadow(1px 1px 20px ${colors[color]})` }}
    />
  </Link>
);

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
      <GlobalStyles />

      <Main>
        <Header>
          <Img fixed={data.sollos.childImageSharp.fixed} />
          <Img fixed={data.year.childImageSharp.fixed} className="in-1991" />
        </Header>

        <Footer>
          <ImageLink
            to="/baxter"
            fixed={data.baxter.childImageSharp.fixed}
            color={0}
          />
          <ImageLink
            to="/jessica"
            fixed={data.jessica.childImageSharp.fixed}
            color={1}
          />
          <ImageLink
            to="/matt"
            fixed={data.matt.childImageSharp.fixed}
            color={2}
          />
          <ImageLink
            to="/morgan"
            fixed={data.morgan.childImageSharp.fixed}
            color={3}
          />
        </Footer>

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

const Footer = styled.footer`
  grid-area: footer;
  /* height: 100%; */
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  img {
    height: 100%;
    width: auto;
    transition: transform 200ms ease-in;
    &:hover {
      transform: scale(1.01);
      cursor: pointer;
    }
  }
`;

export default StyledLayout;
