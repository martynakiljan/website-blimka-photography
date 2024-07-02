import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
  return (
    <ScrollToTop smooth component={<FontAwesomeIcon icon={faArrowUp} />} />
  );
}

export default ScrollToTopButton;
