import { Routes, Route } from "react-router-dom";
import "./App.scss"; //scss (standard css) is an extention of sass file
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";


function App() {
  return <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </>;
}

export default App;
