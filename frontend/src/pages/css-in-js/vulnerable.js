import { useEffect, useState } from "react";
import styled from "styled-components";
import { get } from "../../http";

const CustomDiv = styled.div`
  background-color: ${(props) => props.bgCol};
`;

export default function CssInJsVulnerable() {
  const [data, setData] = useState({ style: { backgroundColor: "#fff" } });
  const [text, setText] = useState("");

  useEffect(() => {
    get("http://localhost:8080/css-in-js").then((payload) => {
      setData(payload.data);
    });
  }, []);

  const { name, age, style } = data;

  return (
    <CustomDiv bgCol={style.backgroundColor}>
      <h1>{name}</h1>
      <h5>Age: {age}</h5>
      <input
        value={text}
        onChange={({ target: { value } }) => setText(value)}
      />
    </CustomDiv>
  );
}
