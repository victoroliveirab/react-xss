import { useEffect, useState } from "react";
import { get, post } from "../../http";

export default function InnerHtmlVulnerable() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    get("http://localhost:8080/plain-tag").then((payload) => {
      setData(payload.data);
    });
  }, []);

  function sendPayload() {
    post("http://localhost:8080/plain-tag", { payload: text }).then(() => {
      setText("");
    });
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <br />
        <button onClick={sendPayload}>Publish</button>
      </div>
      <h2>Todo List</h2>
      {data.map(({ _id, html }) => (
        <div key={_id} dangerouslySetInnerHTML={{ __html: html }} />
      ))}
    </div>
  );
}
