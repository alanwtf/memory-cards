import jotaro from './img/jotaro3.png';
import './App.css';
import Card from './components/Card';
function App() {
  return (
    <div className="App">
      <Card jotaro={jotaro} />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
