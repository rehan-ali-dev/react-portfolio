import React from "react";
import Typewriter from "typewriter-effect";
import {PROFILE} from '../../constants/profileConstants';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          PROFILE.proffesion,
          PROFILE.expertise,
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
