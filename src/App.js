import logo from './logo.svg';
import './App.css';
import HomePage from './components/Homepage';
import EmployeePage from './components/EmployeePage';


function App() {
  const topics = ['Employee Directory', 'Employee']
  //Employee Data
  let allEmployees = [
    {
      name: 'James King',
      position: "President and CEO",
      image: "",
    },
    {
      name: "Julie Taylor",
      position: "VP of Marketing",
      image: "",
    },
    {
      name: "Eugene Lee",
      position: "CFO",
      image: "",
    },
    {
      name: "John Williams",
      position: "VP of Engineering",
      image: "",
    },
    {
      name: "Ray Moore",
      position: "VP of Sales",
      image: "",
    },
    {
      name: "Paul Jones",
      position: "QA Manager",
      image: "",
    },
  ]
  return (
    <div className="App">
      <HomePage title = {topics[0]} workers={allEmployees}/>
      <EmployeePage title = {topics[1]} workers={allEmployees} />
    </div>
  );
}

export default App;
