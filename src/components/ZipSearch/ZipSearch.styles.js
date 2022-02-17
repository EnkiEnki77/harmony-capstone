import styled from "styled-components";
import {FiSearch} from 'react-icons/fi';

export const SearchContainer  = styled.div`
  width: ${props => props.onboard ? '423px' : '214px'} ;
  height: ${props => props.onboard ? '80px' : '48px'}  ;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.onboard ? '50px' : '30px'} ;
  padding: 12px 24px 12px 24px;
  background:${props => props.onboard ? '#FFFFFF' : '#17191C'} ;
  display: flex;
  align-items: center;
  gap: 2%;
  caret-color: transparent;
`;

export const SearchIcon  = styled(FiSearch)`
  font-size: 28px;
  color: ${props => props.onboard ? '#000000' : '#FFFFFF'} ;
  min-height: 24px;
  min-width: 24px;
`;

export const SearchInput  = styled.input`
  width: 154px;
height: 40px;
border: none;
opacity: 0.5;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 20px;
text-align: start;
background-color: transparent;
outline: none;
letter-spacing: 0.02em;
color: ${props => props.onboard ? '#000000' : '#FFFFFF'};
caret-color: ${props => props.onboard ? '#000000' : '#FFFFFF'};

&::placeholder{
  font-size: ${props => props.onboard ? '18px' : '16px'};
  font-weight: 500;
  color: ${props => props.onboard ? '#000000' : '#FFFFFF'};
}
`;