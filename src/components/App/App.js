import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Todo from '../Todo/Todo';
import styles from './App.module.css';

const App = () =>
  (<div className={styles.['main-wrap']}>
    <div className={styles.made}>Выполнено в Web Hero School</div>
    <Router>
      <div>
        <div className={styles.menu}>
          <NavLink className={styles.item} activeClassName={styles.['item__active']} to='/' exact>Обо мне</NavLink>
          <NavLink className={styles.item} activeClassName={styles.['item__active']} to='/todo'>Дела</NavLink>
          <NavLink className={styles.item} activeClassName={styles.['item__active']} to='/contacts'>Контакты</NavLink>
        </div>
        <div>
          <Route path='/' exact component={About} />
          <Route path='/todo' component={Todo} />
          <Route path='/contacts' component={Contacts} />
        </div>
      </div>
    </Router>
  </div>);

export default App;
