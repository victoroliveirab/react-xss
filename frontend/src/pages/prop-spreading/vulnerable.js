import { useEffect, useState } from "react";
import { get } from "../../http";

export default function PropSpreadingVulnerable() {
  const [data, setData] = useState({});

  useEffect(() => {
    get("http://192.168.0.105:8080/prop-spreading").then((payload) => {
      setData(payload.data);
    });
  }, []);

  const { name, age, ...rest } = data;

  return (
    <div>
      <div {...rest} />
      <h1>{name}</h1>
      <h5>Age: {age}</h5>
    </div>
  );
}
