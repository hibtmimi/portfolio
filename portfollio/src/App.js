import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
     
<Router>
<Header/>
  <switch>
  <Route path="/home" exact component={Home} />
  </switch>
</Router>
      
   
    
    </div>
  );
}

export default App;
