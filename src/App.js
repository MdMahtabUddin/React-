// import logo from './logo.svg';
import './App.css';

function App() {
  // 45-5 (advanced) Create multiple components from an array of objects

  const players=['sakib','tamim','musfiq','riyad'];
  return (
    <div className="App">
      
      {
        players.map(cricket => <Person name={cricket}></Person>)
      }
      

    </div>
  );
}

// কম্পোনেন্ট বানানো , অনেক টা html ট্যাগের মতই 
// 45-3 Create Component, return HTML from a component

// যখন কোন একটা কম্পোনেন্ট মধ্যে props সেট করা হলে , সেটা অনেক টা  html এর এট্রিবিউট এর মত কাজ করবে । 

function Person(props){
  return (
    <div>
    <h1>{props.name}</h1>

  </div>
  )
};





export default App;
