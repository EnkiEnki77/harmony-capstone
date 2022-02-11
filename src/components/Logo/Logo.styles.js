import styled from "styled-components";
import {IoMdMusicalNote} from 'react-icons/io';
import { Link } from "react-router-dom";

export const LogoContainer  = styled.div`
  width: 95px;
  height: 36px;
  display: flex;
  align-items: center;
  flex-basis: 75%;
`;

export const LogoIcon  = styled(IoMdMusicalNote)` 
font-size: 20px;
color: #1DB954;
`;

export const AppName  = styled.h2`
  font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 36px;
/* identical to box height, or 225% */

letter-spacing: 0.02em;

color: #1DB954;
caret-color: transparent;
`;

export const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 12%;

  &:hover{
      opacity: 0.8;
  }
`;