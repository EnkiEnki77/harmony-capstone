import styled from "styled-components";
import {FiSearch} from 'react-icons/fi';

export const SearchContainer  = styled.div`
  width: ${props => props.onboard ? '' : '214px'} ;
  height: ${props => props.onboard ? '' : '48px'}  ;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px; ;
  padding: 12px, 24px, 12px, 24px;
  background: #17191C;
  display: flex;
  align-items: center;
`;

export const SearchIcon  = styled(FiSearch)`
  width: 24px;
  height: 24px;
  color: white;
`;

export const SearchInput  = styled.input`
  width: 134px;
height: 20px;

opacity: 0.5;
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
/* identical to box height */

text-align: center;
letter-spacing: 0.02em;

/* white */

color: #FFFFFF;
`;