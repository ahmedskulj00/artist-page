import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { ArtistProvider } from "./context/ArtistContext";
function App() {
  return (
    <ArtistProvider>
      <div className="App">
        <Navbar />
      </div>
    </ArtistProvider>
  );
}

export default App;
