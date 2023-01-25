import axios from "axios";
import React, { useState, useEffect } from "react";
import Image from 'next/image'

// Import hooks provided by react-redux
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';

// Import all actions and bind them

import { useTheme } from 'next-themes'



const styledSVG = styled.svg`
  fill:  ${props => props.theme === 'dark' ? 'white' : 'black'}
`;

const BasicDetails: React.FC = () => {


  return (
    <>

    </>
  )
}

export default BasicDetails;