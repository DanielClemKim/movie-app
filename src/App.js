import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routers/Home";
import Detail from "./routers/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/movie/:id" element={<Detail />} />
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
