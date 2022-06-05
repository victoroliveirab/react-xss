import { BrowserRouter, Routes, Route } from "react-router-dom";

import PlainTagComponent from "./pages/plain-tag";

import InnerHtmlDefault from "./pages/inner-html";
import InnerHtmlVulnerable from "./pages/inner-html/vulnerable";
import InnerHtmlFixed from "./pages/inner-html/fixed";

import HrefAbuseDefault from "./pages/href-abuse";
import HrefAbuseVulnerable from "./pages/href-abuse/vulnerable";
import HrefAbuseFixed from "./pages/href-abuse/fixed";

import PropSpreadingDefault from "./pages/prop-spreading";
import PropSpreadingVulnerable from "./pages/prop-spreading/vulnerable";
import PropSpreadingFixed from "./pages/prop-spreading/fixed";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/plain-tag" element={<PlainTagComponent />} />
        <Route path="/inner-html" element={<InnerHtmlDefault />} />
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
        <Route path="/prop-spreading" element={<PropSpreadingDefault />} />
        <Route
          path="/prop-spreading/vulnerable"
          element={<PropSpreadingVulnerable />}
        />
        <Route path="/prop-spreading/fixed" element={<PropSpreadingFixed />} />
      </Routes>
    </BrowserRouter>
  );
}
