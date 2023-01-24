import Graph from "../components/Graph";
import Sidebar from "../components/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
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
