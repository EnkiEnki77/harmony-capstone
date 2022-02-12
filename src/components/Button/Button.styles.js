import styled from "styled-components";
import {BsSpotify} from 'react-icons/bs'

export const StyledButton = styled.button`
width: ${props => props.buttonAltW ? props.buttonAltW : '134px'} ;
height: ${props => props.buttonAltH ? props.buttonAltH : '43px'} ;
background-color: ${props => props.buttonAlt ? '#1DB954' : 'transparent'};
color: ${props => props.buttonAlt2 ? props.buttonAlt2 : '#1DB954'};
border: 2px solid #1DB954;
filter: drop-shadow(0px 4px 32px rgba(60, 69, 76, 0.12));
border-radius: 30px;
font-weight: bold;
font-size: 16px;
margin-left: ${props => props.margin && props.margin};
display: flex;
align-items: center;
justify-content: center ;
gap: 2%;
font-size: 16px;
font-weight: 700;

&:hover{
    cursor: pointer;
    background-color: #1DB954;
    color: ${props => props.hover ? 'black': 'white'} ;
}

`;

export const SpotifyIcon = styled(BsSpotify)`
  font-size: 18px;
`;