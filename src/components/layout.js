import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
// import sollos from '../images/sollos2.png';
// import on1991 from '../images/1991-2.png';
// import baxter from '../images/baxter-wilson.png';
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
          fluid(quality: 90, maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      year: file(relativePath: { eq: "1991-2.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      # moon: file(relativePath: { eq: "moon2.png" }) {
      #   childImageSharp {
      #     fluid(maxWidth: 300, quality: 100) {
      #       ...GatsbyImageSharpFluid
      #     }
      #   }
      # }

      baxter: file(relativePath: { eq: "baxter-wilson.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <BackgroundImage Tag="div" fluid={data.starField.childImageSharp.fluid}>
      <GlobalStyles />

      <Header>
        <Img fluid={data.sollos.childImageSharp.fluid} />
        <Img fluid={data.year.childImageSharp.fluid} className="in-1991" />
        {/* <img src={data.moon.childImageSharp.fluid.base64} className="moon" /> */}
      </Header>

      {children}

      <Footer>
        <Img
          fluid={data.baxter.childImageSharp.fluid}
          style={{ overflow: 0 }}
        />
      </Footer>
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

const Header = styled.header`
  width: 600px;
  margin: 0 auto;
  text-align: center;
  position: relative;

  img {
    width: 100%;
  }

  .in-1991 {
    margin: 0 auto;
    width: 200px;
  }

  .moon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
  }
`;

const Footer = styled.footer`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  img {
    height: auto;
    width: 100%;
    align-self: flex-end;
    transition: transform 300ms ease-in;
    filter: drop-shadow(4px 6px 30px pink);
    &:hover {
      cursor: pointer;
      transform: scale(1.03);
    }
  }
`;

export default StyledLayout;
