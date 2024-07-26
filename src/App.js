import "./App.css";
import Banner from "./components/banner";
import Navbar from "./components/navbar";
import Retreats from "./components/retreats";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Retreats />
    </div>
  );
}

export default App;
