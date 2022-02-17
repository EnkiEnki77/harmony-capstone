import React from "react";
import Header from "../components/Header/Header";
import { MessagesContainer } from "../components/PageStyles/Messages.styles";

const Messages = () => {
  return (
    <MessagesContainer>
      <Header messages={true} onboard={true} />
    </MessagesContainer>
  );
};

export default Messages;
