import { BrowserRouter, Routes, Route } from "react-router-dom";

import PlainTagComponent from "./pages/plain-tag";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/plain-tag" element={<PlainTagComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
