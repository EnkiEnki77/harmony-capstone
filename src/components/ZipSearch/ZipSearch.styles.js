import styled from "styled-components";
import {FiSearch} from 'react-icons/fi';

export const SearchContainer  = styled.div`
  width: ${props => props.onboard ? '' : '214px'} ;
  height: ${props => props.onboard ? '' : '48px'}  ;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px; ;
  padding: 12px 24px 12px 24px;
  background: #17191C;
  display: flex;
  align-items: center;
  gap: 4%;
`;

export const SearchIcon  = styled(FiSearch)`
  font-size: 28px;
  color: white;
`;

export const SearchInput  = styled.input`
  width: 134px;
height: 40px;
border: none;
opacity: 0.5;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
text-align: start;
background-color: transparent;
outline: none;
letter-spacing: 0.02em;
color: #FFFFFF;

&::placeholder{
  color: #FFFFFF;
}
`;