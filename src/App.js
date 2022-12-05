import Calendar from "./components/Calendar";
import CRUD from "./components/CRUD";

function App() {
  return (
    <div className="App">
      <div>
        <CRUD />
      </div>
      <br></br>
      <div>
        <Calendar />
      </div>
    </div>
  );
}

export default App;
