import React from "react";
import Button from "../Button/Button.js";
import {
  SearchContainer,
  SearchIcon,
  SearchInput,
} from "./ZipSearch.styles.js";

const ZipSearch = (props) => {
  return (
    <>
      <SearchContainer onboard={props.onboard}>
        <SearchIcon onboard={props.onboard} />
        <SearchInput
          onboard={props.onboard}
          type="text"
          name="zip search"
          placeholder="City or Zip Code"
        />
        {props.onboard && (
          <Button
            text="Get Started"
            margin="30px"
            buttonAltW="3000px"
            buttonAltH="52px"
            hover={true}
            buttonAlt={true}
            buttonAlt2="white"
          />
        )}
      </SearchContainer>
    </>
  );
};

export default ZipSearch;
