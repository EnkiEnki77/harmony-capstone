import styled from "styled-components";

export const StyledButton = styled.button`
width: ${props => props.button ? props.button : '134px'} ;
height: ${props => props.button ? props.button : '43px'} ;
background-color: ${props => props.button ? '#1DB954' : 'transparent'};
color: black;
border: 2px solid #1DB954;
filter: drop-shadow(0px 4px 32px rgba(60, 69, 76, 0.12));
border-radius: 30px;
`;