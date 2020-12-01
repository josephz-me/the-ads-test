import React, { useState } from "react";
import Likert from "react-likert-scale";

export default function LikertScalePage(props) {
  const likertOptions = {
    picked: val => {
      console.log(val);
    }
  };
  return <Likert question={props.question} responses={props.responses} />;
}
