import React from 'react';
import styles from  './App.module.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from './Menu';
import Home from './Home';

const App: React.FC = () => (
    <div className={styles.App}>
      <Router>
        <Menu />
        <Route exact path="/" component={Home}/>
      </Router>
    </div>
  );

export default App;
