import React from "react";
import styled from "styled-components";

type BoxProps = React.HTMLAttributes<HTMLDivElement>;

const Box = (props: BoxProps) => {
  return <Container {...props} />;
};

export default Box;

const Container = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  background-color: blue;
  color: #fff;
  padding: 1rem;
  margin: 0.2rem 0;
`;
