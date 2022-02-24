import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const EventContainer = styled.div`
  width: 70%;
  height: 60px;
  margin-top: 15px;
  margin-left: 5px;
  margin-bottom: 10px;

  /* background-color: green; */
  display: flex;
  justify-content: left;
  align-items: flex-start;
  padding-right: 40px;

  &:hover {
    background: #fafafa;
  }
`;

export const EventItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;
  margin-top: -50px;

  /* background-color: blue; */

  button {
    margin-top: 10px;
  }
`;

export const ArtistImage = styled.img`
  width: 60px;
  height: 60px;
  /* margin-left: 10px; */
  margin-top: 50px;
  border-radius: 50px;
`;

export const DateTime = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;
  height: 100%;
`;

export const Date = styled.h2`
  width: 60px;
  height: 20px;
  margin-left: 23px;
  margin-top: 55px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #2d9cdb;
`;

export const Day = styled.div`
  height: 17px;
  margin-right: 5px;
  margin-left: -58px;
  padding-top: 10px;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #243037;
  opacity: 0.6;
`;

export const Time = styled.div`
  height: 17px;
  padding-top: 10px;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #243037;
  opacity: 0.6;
`;

export const ArtInfo = styled.div`
  height: 100%;

  margin-left: 20px;
  margin-top: 35px;
`;

export const Artist = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  text-align: left;
  letter-spacing: 0.02em;

  /* txt-color */

  color: #243037;
`;

export const Location = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.02em;

  /* txt-color */

  color: #243037;

  opacity: 0.6;
`;

export const DownArrow = styled(FontAwesomeIcon)`
  margin-top: 70px;
  padding-left: 10px;
  padding-right: 20px;
`;
