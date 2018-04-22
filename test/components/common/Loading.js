//https://codesandbox.io/s/mqx0ql55qp

import React from "react";
import ReactLoading from "react-loading";
import { Section, Title, Article, Prop, list } from "../../../javascripts/generic";
import "../../css/styles.css";
const pStyle = {
  position: 'absolute'
};
const Loading = () => (
  <Section style={pStyle}>
    <Title></Title>
    <Article>
      <ReactLoading type={"cylon"} color="#000" />
    </Article>
  </Section>
);

export default Loading;