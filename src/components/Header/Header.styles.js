import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 68px;
  background-color: black;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8%;
  gap: 2%;
`;

export const Logout = styled(Link)`
  color: #FFFFFF;
  font-size: 18px;
  text-decoration: none;

  &:hover{
      cursor: pointer;
      opacity: 0.8;
  }
`;