import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom';

import Home from './pages/home/Home'
import Header from './components/header/Header';
import About from './pages/about/About'
import Service from './pages/service/Service'
import Gallery from './pages/gallery/Gallery'
import Terms from './pages/terms/Terms'
import Footer from './components/footer/Footer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/service" component={Service}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/terms" component={Terms}/>
          </Switch>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
