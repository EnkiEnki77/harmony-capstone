import styled from "styled-components";

export const EventContainer = styled.div`
  width: 100%;
  height: 80px;
  margin-top: 50px;
  margin-left: 50px;
`;

export const EventItem = styled.div`
  width: 75%;
  height: 60px;
  display: flex;
  flex-flow: row wrap;
  margin-top: -100px;

  button {
    margin-top: 50px;
    margin-left: 50px;
  }
`;

export const ArtistImage = styled.img`
  width: 60px;
  height: 60px;
  margin-left: 50px;
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
  margin-left: 50px;
  margin-top: 35px;
`;

export const Artist = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  text-align: center;
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
