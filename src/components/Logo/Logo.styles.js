import styled from "styled-components";
import {FcMusic} from 'react-icons/fc';

export const LogoContainer  = styled.div`
  padding-left: 20px;
  width: 95px;
  height: 36px;
  display: flex;
  align-items: center;
  flex-basis: 75%;
`;

export const LogoIcon  = styled(FcMusic)` 
width: 10.67px;
height: 16px;
color: #1DB954;
`;

export const AppName  = styled.h2`
  font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 36px;
/* identical to box height, or 225% */

letter-spacing: 0.02em;

color: #1DB954;
`;