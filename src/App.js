import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import  Experience from "./components/Experience/Experience"
import  Achievement from "./components/Achievement/Achievement"
import  Portfolio from "./components/Portfolio/Portfolio"
import  LetUsTalk from "./components/LetUsTalk/LetUsTalk"
import "./App.css";

const App = () => {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Achievement" element={<Achievement />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/LetUsTalk" element={<LetUsTalk />} />
      </Routes>
    </>
  )
}

export default App