import { BrowserRouter, Routes, Route } from "react-router-dom";

import PlainTagComponent from "./pages/plain-tag";

import InnerHTMLDefault from "./pages/inner-html";
import InnerHtmlVulnerable from "./pages/inner-html/vulnerable";
import InnerHtmlFixed from "./pages/inner-html/fixed";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/plain-tag" element={<PlainTagComponent />} />
        <Route path="/inner-html" element={<InnerHTMLDefault />} />
        <Route
          path="/inner-html/vulnerable"
          element={<InnerHtmlVulnerable />}
        />
        <Route path="/inner-html/fixed" element={<InnerHtmlFixed />} />
      </Routes>
    </BrowserRouter>
  );
}
