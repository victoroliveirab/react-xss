import { BrowserRouter, Routes, Route } from "react-router-dom";

import PlainTagComponent from "./pages/plain-tag";

import InnerHTMLDefault from "./pages/inner-html";
import InnerHtmlVulnerable from "./pages/inner-html/vulnerable";
import InnerHtmlFixed from "./pages/inner-html/fixed";

import HrefAbuseDefault from "./pages/href-abuse";
import HrefAbuseVulnerable from "./pages/href-abuse/vulnerable";
import HrefAbuseFixed from "./pages/href-abuse/fixed";

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
        <Route path="/href-abuse" element={<HrefAbuseDefault />} />
        <Route
          path="/href-abuse/vulnerable"
          element={<HrefAbuseVulnerable />}
        />
        <Route path="/href-abuse/fixed" element={<HrefAbuseFixed />} />
      </Routes>
    </BrowserRouter>
  );
}
