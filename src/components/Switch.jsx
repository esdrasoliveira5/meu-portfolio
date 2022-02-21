import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import PortfolioContext from '../context/AppContext';

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    span {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #2B2D42;
      -webkit-transition: .4s;
      transition: .4s;
      border-radius: 34px;
    }

    span:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
      border-radius: 50%;
    }


    input:checked + span {
      background-color: white;
    }

    input:focus + span {
      box-shadow: 0 0 1px white;
    }
    input:checked +span:before {
      background-color: #2B2D42;
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
`;

function Switch() {
  const { nightMode, setNightMode } = useContext(PortfolioContext);
  const [checkBox, setCheckBox] = useState(false);
  useEffect(() => {
    setCheckBox(nightMode);
  }, []);

  function handleNightMode({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setCheckBox(value);
    setNightMode(value);
  }
  return (
    <SwitchLabel className="switch">
      <input
        type="checkbox"
        checked={checkBox}
        name="switch"
        onChange={(event) => handleNightMode(event)}
      />
      <span className="slider round" />
    </SwitchLabel>
  );
}

export default Switch;
