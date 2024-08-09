import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home1 from "./pages/home1";



function ScrollToTopAndManageMeta() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "Welcome to the home page";
        break;
      case "/projects":
        title = "Projects";
        metaDescription = "Check out our semester projects";
        break;
      default:
        title = "App";
        metaDescription = "Default description";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return null; // This component doesn't render anything visible
}

function App() {
  return (
    <Router>
      {/* Scroll to top and manage meta tags */}
      <ScrollToTopAndManageMeta />
      <Routes>
        <Route path="/" element={<Home1 />} />
     
      </Routes>
    </Router>
  );
}

export default App;
