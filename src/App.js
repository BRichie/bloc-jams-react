import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <div className="Entry">
           <Link to= '/' id="landing-link">My Bloc</Link>
            <div className="Entry"></div>
            <Link to='/library' id="library-link">My Music</Link>
            </div>
          </nav>
          <div id="text">
  <h1 id="neon">Bl<span id="offset">oc</span> Jams</h1>
</div>
         </header>
        
         <main>
         <Route exact path="/" component={Landing} />
           <Route path="/library" component={Library} />
           <Route path="/album/:slug" component={Album} />
         </main>
          </div>
    );
    
    
        
    
  }
}

export default App;
