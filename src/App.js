import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { ArtistProvider } from "./context/ArtistContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArtistDetail from "./pages/ArtistDetail/ArtistDetail";
function App() {
  return (
    <ArtistProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/:artist_uuid" element={<ArtistDetail />}></Route>
          </Routes>
        </Router>
      </div>
    </ArtistProvider>
  );
}

export default App;
