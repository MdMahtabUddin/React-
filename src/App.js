import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      
      <Person></Person>

    </div>
  );
}

// কম্পোনেন্ট বানানো , অনেক টা html ট্যাগের মতই 
// 45-3 Create Component, return HTML from a component

function Person(){
  return (
    <div>
    <h1>Shakib al Hasan</h1>
    <p>Profession: cricketer</p>

  </div>
  )
};





export default App;
