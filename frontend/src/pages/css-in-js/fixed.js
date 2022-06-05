import { useEffect, useState } from "react";
import styled from "styled-components";
import { get } from "../../http";

const CustomDiv = styled.div`
  background-color: ${(props) => props.bgCol};
`;

export default function CssInJsFixed() {
  const [data, setData] = useState({ style: { backgroundColor: "#fff" } });
  const [text, setText] = useState("");

  useEffect(() => {
    get("http://localhost:8080/css-in-js").then((payload) => {
      setData(payload.data);
    });
  }, []);

  const { name, age, style } = data;

  function validateColor(color) {
    const regex = /^#([\da-f]{3}|[\da-f]{6})$/i;
    if (!regex.test(color)) return "#fff";
    return color;
  }

  return (
    <CustomDiv bgCol={validateColor(style.backgroundColor)}>
      <h1>{name}</h1>
      <h5>Age: {age}</h5>
      <input
        value={text}
        onChange={({ target: { value } }) => setText(value)}
      />
    </CustomDiv>
  );
}
