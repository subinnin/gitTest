import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import ScrollText from './pages/ScrollText';
import GuestBook from './pages/GuestBook';
import Navbar from "./com/Navbar";

function App() {
  return (
    <Router basename="/gitTest">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/ScrollText" element={<ScrollText />} />
          <Route path="/GuestBook" element={<GuestBook />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
