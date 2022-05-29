import { get } from "./http";

export default function App() {
  get("http://localhost:8080").then((data) => console.log(data));
  return <div>Hello World!</div>;
}
