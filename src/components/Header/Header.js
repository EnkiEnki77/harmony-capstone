import React from "react";
import { HeaderContainer } from "./Header.styles.js";
import { Logout } from "./Header.styles.js";
import Logo from "../Logo/Logo.js";
import ZipSearch from "../ZipSearch/ZipSearch.js";
import { MessageIcon, MessagesLink } from "../PageStyles/Messages.styles.js";

const Header = (props) => {
  return (
    <HeaderContainer>
      <Logo messages={props.messages} />

      {props.dash && [
        <ZipSearch />,
        <MessagesLink to="/messages">
          <MessageIcon />
        </MessagesLink>,
        <Logout to="/">Logout</Logout>,
      ]}

      {props.onboard && <Logout to="/">Logout</Logout>}
    </HeaderContainer>
  );
};

export default Header;
