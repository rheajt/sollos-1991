import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import { FaCaretLeft, FaFile } from 'react-icons/fa';

const slideUp = keyframes`
  from {
    transform: translateY(500px);
    opacity: .1;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const IFrame = ({ data }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  function loaded() {
    setIsLoaded(true);
  }

  return (
    <>
      <IFrameWrapper className={isLoaded ? `loaded` : ''}>
        <iframe
          title="character-iframe"
          src={data.embed}
          onLoad={loaded}
        ></iframe>
        <div className="controls">
          <Link to="/">
            <FaCaretLeft />
          </Link>
          <a href={data.url + '/edit'}>
            <FaFile />
          </a>
        </div>
      </IFrameWrapper>
      {/* <Loading className={isLoaded ? 'done' : ''} /> */}
    </>
  );
};

const IFrameWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(0, 0, 0, 0.9)
  );

  &.loaded {
    display: flex;
  }

  .controls {
    display: flex;
    justify-content: space-between;
    color: white;
    width: 800px;
    margin-top: 1rem;
    font-size: 2rem;
  }

  iframe {
    width: 800px;
    height: 600px;
    animation: ${slideUp} 500ms ease-in forwards;
  }

  a {
    color: white;
  }
`;

const Loading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: radial-gradient(white, black);

  &.done {
    display: none;
  }
`;

export default IFrame;
