import React from 'react';
import styles from  './App.module.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from './Menu';
import Home from './Home';
import Education from './Education';

import { PromiseWrapper } from './Util';

const p = fetch("/data.json").then(res => res.json());

const App: React.FC = () => (
    <div className={styles.App}>
      <Router>
        <Menu />
        <Route exact path="/"><Home/></Route>
        <Route exact path="/education"><PromiseWrapper data={p}><Education/></PromiseWrapper></Route>
      </Router>
    </div>
  );

export default App;
