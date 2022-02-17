import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 100%;
`;

export const DashboardOverlay = styled.div`
  z-index: -1;
  width: 100%;
  height: 500px;
  background-color: black;
  background: url(${(props) => props.overlay}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const DashboardBackground = styled.img`
  z-index: -999;
  width: 100%;
  height: 500px;
  position: absolute;
`;

export const DashBanner = styled.div`
  display: flex;
  flex-flow: row;
  height: 500px;
  width: 100%;
`;

export const DashTopline = styled.h6`
  position: absolute;
  width: 590px;
  height: 20px;
  left: 120px;
  top: 172px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #ffffff;
  opacity: 0.8;
  order: 1;
`;

export const DashMainline = styled.h1`
  position: absolute;
  width: 590px;
  height: 73px;
  left: 120px;
  top: 200px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 73px;
  letter-spacing: 0.01em;
  color: #ffffff;
`;

export const DashSubline = styled.h6`
  position: absolute;
  width: 590px;
  height: 29px;
  left: 120px;
  top: 281px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.01em;
  color: #ffffff;
  opacity: 0.8;

  button {
    margin-top: 40px;
  }
`;

export const UserLocation = styled.h4`
  width: 371px;
  height: 30px;
  margin-left: 100px;
  margin-top: 50px;

  span {
    color: #1db954;
  }
`;
