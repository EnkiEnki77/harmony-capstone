import styled from "styled-components";

export const StyledButton = styled.button`
width: ${props => props.buttonAltW ? props.buttonAltW : '134px'} ;
height: ${props => props.buttonAltH ? props.buttonAltH : '43px'} ;
background-color: ${props => props.buttonAlt ? '#1DB954' : 'transparent'};
color: ${props => props.buttonAlt2 ? '#000000' : 'white'};
border: 2px solid #1DB954;
filter: drop-shadow(0px 4px 32px rgba(60, 69, 76, 0.12));
border-radius: 30px;
font-weight: bold;
font-size: 16px;
margin-left: ${props => props.margin && props.margin};

&:hover{
    cursor: pointer;
    opacity: 0.8;
}

`;