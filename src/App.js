import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routers/Home";
import Detail from "./routers/Detail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
          <Route path="/:program/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
