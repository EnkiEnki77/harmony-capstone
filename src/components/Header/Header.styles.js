import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 68px;
  background-color: black;
  position: fixed;
  display: flex;
  align-items: center;
`;

export const Logout = styled(Link)`
  color: grey;
`;