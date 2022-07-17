import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from "./components/Calendar"
import TaskDetails from "./components/TaskDetails"

function App() {
  return (
    <div className="App">
      <Calendar></Calendar>
      {
        <TaskDetails></TaskDetails>
      }
      
    </div>
  );
}

export default App;
