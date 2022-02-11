import styled from "styled-components";
import {AiOutlineMessage} from 'react-icons/ai'
import { Link } from "react-router-dom";

export const MessagesContainer = styled.div`
  
`;

export const MessagesLink = styled(Link)`
  
`;

export const MessageIcon = styled(AiOutlineMessage)`
  font-size: 26px;
  color: #FFFFFF;
  padding-top: 3px;

  &:hover{
      opacity: 0.8;
  }
`;