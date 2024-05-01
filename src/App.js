import logo from './logo.svg';
import './App.css';
import HomePage from './components/Homepage';
import EmployeePage from './components/EmployeePage';


function App() {
  const topics = ['Employee Directory', 'Employee']
  return (
    <div className="App">
      <HomePage title = {topics[0]}/>
      <EmployeePage title = {topics[1]}/>
      
    </div>
  );
}

export default App;
