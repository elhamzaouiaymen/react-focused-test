import React, { FunctionComponent, useState, ChangeEvent, KeyboardEvent } from 'react';
import styled from 'styled-components';

const AwesomeComponent: FunctionComponent<{}> = props => {
  const windowInnerWidth = window.innerWidth;
  const [windowLiveWidth, setWindowLiveWidth] = useState(windowInnerWidth);
  const [divHeight, setDivHeight] = useState();
  const StyledDiv = styled.div`
    margin: auto;
    height: ${divHeight}px;
    width: 400px;
    padding: 2em;
    border: 1px solid black;

    input {
      position: relative;
      width: 100%;
    }
  `;

  window.addEventListener('resize', () => {
    setWindowLiveWidth(window.innerWidth);
  });

  const handleKeyPressed = (e: KeyboardEvent<HTMLInputElement>) => {
    setDivHeight(parseInt(e.currentTarget.value));
  };

  return (
    <StyledDiv>
      <span>Live window width : {windowLiveWidth}</span>
      <input type="number" maxLength={3} value={divHeight} onKeyPress={handleKeyPressed} />
    </StyledDiv>
  );
};

export default AwesomeComponent;
