import axios from "axios";
import React, { useState, useEffect } from "react";
import Image from 'next/image'

// Import hooks provided by react-redux
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';

// Import all actions and bind them
import { getCrabData, getSpaceData } from "../../state/actions/space";
import { useTheme } from 'next-themes'


const StyledImage = styled.img`
  // width: px;
  // height: 214px
`;

const StyledSpaceGallery = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

// turn into random photo generator?
const SpaceDetails: React.FC = () => {
  const spaceData = useSelector((state: any) => state?.space.spaceData);
  const crabData = useSelector((state: any) => state?.space.crabData);
  const dispatch = useDispatch();
  const { theme, setTheme } = useTheme()

  // andromeda 
  const andromedaImage = {
    method: 'GET',
    url: 'https://images-api.nasa.gov/asset/PIA04921?api_key=cqWwUwD9BawMJkVjauCSBnMgmERued8S2Mh1WOq4',
  };

  const crabNebulaImage = {
    method: 'GET',
    url: 'https://images-api.nasa.gov/asset/PIA21474?api_key=cqWwUwD9BawMJkVjauCSBnMgmERued8S2Mh1WOq4',
  };

  const fetchSpaceStuff = async () => {
    await axios.request(andromedaImage).then((response) => {
      dispatch(getSpaceData(response.data))
    }).catch(function (error) {
      console.error(error);
    });
    await axios.request(crabNebulaImage).then((response) => {
      dispatch(getCrabData(response.data))
    }).catch(function (error) {
      console.error(error);
    });
  }

  useEffect(() => {
    fetchSpaceStuff()
  }, [])

  return (
    <div className="text-neutral-900 dark:text-white">Gallery</div>
  )
}

export default SpaceDetails;