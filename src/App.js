import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { ArtistProvider } from "./context/ArtistContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ArtistDetail from "./pages/ArtistDetail/ArtistDetail";
function App() {
  return (
    <ArtistProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/7c46c4ce-09c0-4f95-b4e1-84ae10bd24ab" />}
            ></Route>
            <Route path="/:artist_uuid" element={<ArtistDetail />}></Route>
          </Routes>
        </Router>
      </div>
    </ArtistProvider>
  );
}

export default App;
