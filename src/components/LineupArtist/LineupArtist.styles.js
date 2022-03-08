import styled from 'styled-components'
import heroImg from '../../images/unsplash_hgO1wFPXl3I.png'

export const LineupArtistCont  = styled.div`
 overflow: hidden;
  display: flex;
  align-items: center;
  gap:8px ;
  padding:5px ;
  max-width: 40% ;

  &:hover{
    /* background: #fafafa; */
    h2 {
        color: #2D9CDB;
    }
    
    cursor: pointer;
  }
`;

export const ArtistPhoto = styled.img`
  width: 32px;
height: 32px;
border-radius: 50%;
border: 1px solid black;
`;

export const ArtistName  = styled.h2`
  font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
/* identical to box height */

text-align: center;
letter-spacing: 0.02em;

color: #000000;


`;