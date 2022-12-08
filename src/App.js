import CalendarForm from "./components/CalendarForm";
import CRUD from "./components/CRUD";

function App() {
  return (
    <div className="App">
      <div>
        <CRUD />
      </div>
      <br></br>
      <div>
        <CalendarForm />
      </div>
    </div>
  );
}

export default App;
