import { useEffect, useState } from "react";
import { get, post } from "../../http";

export default function HrefAbuseVulnerable() {
  const [title, setTitle] = useState("");
  const [href, setHref] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    get("http://localhost:8080/href-abuse").then((payload) => {
      setData(payload.data);
    });
  }, []);

  function sendPayload() {
    post("http://localhost:8080/href-abuse", {
      title,
      href,
    }).then(() => {
      setTitle("");
      setHref("");
    });
  }

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <input value={href} onChange={(e) => setHref(e.target.value)} />
        <br />
        <button onClick={sendPayload}>Publish</button>
      </div>
      <h2>Todo List</h2>
      {data.map(({ id, href, title }) => (
        <a key={id} href={href} style={{ display: "block" }}>
          {title}
        </a>
      ))}
    </div>
  );
}
