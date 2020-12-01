import React from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Project from './components/Project';
import ProjectList from './components/ProjectList';

function App() {
  return (
      <Router basename='/'>
        <div>
          <Route path='/' exact component={ProjectList} />
          <Route path='/:id' exact component={Project} />
        </div>
      </Router>
  );
}

export default App;