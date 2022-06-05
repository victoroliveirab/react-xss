import { useEffect, useState } from "react";
import { get } from "../../http";

export default function PropSpreadingFixed() {
  const [data, setData] = useState({});

  useEffect(() => {
    get("http://localhost:8080/prop-spreading").then((payload) => {
      setData(payload.data);
    });
  }, []);

  const { name, age, ...rest } = data;

  function filterObjectKeys(object) {
    const ALLOWED_KEYS = ["style"];
    return Object.keys(object).reduce(
      (filteredObject, key) =>
        ALLOWED_KEYS.includes(key)
          ? {
              ...filteredObject,
              [key]: object[key],
            }
          : filterObjectKeys,
      {}
    );
  }

  return (
    <div>
      <div {...filterObjectKeys(rest)} />
      <h1>{name}</h1>
      <h5>Age: {age}</h5>
    </div>
  );
}
