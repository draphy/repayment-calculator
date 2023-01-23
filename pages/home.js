import Graph from "../components/Graph";
import Sidebar from "../components/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="graph">
        <Graph />
      </div>
    </div>
  );
}

export default App;
