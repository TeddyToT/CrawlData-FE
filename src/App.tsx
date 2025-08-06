import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { AppProvider } from "./context/AppContext";
import AppLayout from "./layouts/AppLayout";
import AutoTop from "./components/ToTop/AutoTop";
import HomePage from "./pages/HomePage/HomePage";
import ArticlesByCategory from "./pages/ArticlesByCategory/ArticlesByCategory";
import ArticleDetails from "./pages/ArticleDetails/ArticleDetails";
function App() {
  return (
    <>
      <AppProvider>
        <Router>
          <AutoTop />
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/:slug" element={<ArticlesByCategory />} />
              <Route path="/:slug/:article" element={<ArticleDetails />} />
            </Route>
          </Routes>
        </Router>
      </AppProvider>
    </>
  );
}

export default App;
