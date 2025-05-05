import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Methodology from "./pages/Methodology";
import ResultsPage from "./pages/Results";
import GalleryPage from "./pages/Gallery";
import FutureWorkPage from "./pages/FutureWork";
import CodePage from "./pages/Code";
import ReportPage from "./pages/Report";
import EthicsPage from "./pages/Ethics";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/future-work" element={<FutureWorkPage />} />
            <Route path="/code" element={<CodePage />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/ethics" element={<EthicsPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
