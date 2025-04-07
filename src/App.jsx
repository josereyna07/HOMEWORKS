import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SongList from "./SongList";
import BrowserHistory from "./BrowserHistory";

const App = () => (
  <BrowserRouter>
    <nav>
      <Link to="/">Song List</Link> | <Link to="/history">Browser History</Link>
    </nav>
    <Routes>
      <Route path="/" element={<SongList />} />
      <Route path="/history" element={<BrowserHistory />} />
    </Routes>
  </BrowserRouter>
);

export default App;
