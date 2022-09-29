import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Rubel', 'Bapparaz', 'Koober', 'Bappi', 'Shuvo', 'Omar Sani'];

  const cinemas = [
    { nayok: 'Koober', nayika: 'kopila' },
    { nayok: 'Rubel', nayika: 'Moushumi' },
    { nayok: 'Razzak', nayika: 'Shabana' },
    { nayok: 'Jashim', nayika: 'Suchorita' },

  ]
  return (
    <div className="App">
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
      </ul>
      {/* <Cinema nayok="J Bond" nayika="Cat W"></Cinema> */}
      {
        cinemas.map(cinema => <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
      }

    </div>
  );
}


function Cinema(props) {
  return (
    <div className="person">
      <h2>Nayok: {props.nayok}</h2>
      <h4>Nayika: {props.nayika}</h4>
    </div>
  )
}

function Friend(props) {
  return (
    <div className="person">
      <h3>Phone: {props.phone}</h3>
      <h5>Address: {props.address}</h5>
    </div>
  );
}



export default App;
