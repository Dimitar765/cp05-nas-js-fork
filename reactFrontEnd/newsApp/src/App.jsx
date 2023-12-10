import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import LogIn from "./pages/LogIn/LogIn";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import { SignUp } from "./pages/SignUp/SignUp";
import Collection from "./pages/Collection/Collection";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/news" element={<Homepage />} />
          <Route path="/" element={<LogIn />} />
          <Route path="create" element={<SignUp />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
