import React from 'react';
import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <StyledLink to="/recap">Enter</StyledLink>
  </Layout>
);

const bounce = keyframes`
  from {
    transform: translateY(0);
  }

  50% {
    transform: translateY(20px);
  }

  to {
    transform: translateY(0);
  }
`;

const StyledLink = styled(Link)`
  background-image: linear-gradient(to bottom, #a7edfa 0%, #8ce6ee 25%, #f0c5df 75%, #c86d95 100%);
  color: #0c0291;
  justify-self: center;
  align-self: center;
  padding: 2rem;
  font-size: 2rem;
  text-decoration: none;
  text-transform: uppercase;

  /* &:hover {
    animation: ${bounce} 1s ease-in forwards;
  } */
`;
export default IndexPage;
