import React from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom';

import Header from './Header';
import Genres from './Genres/Genres';
import NewGenre from './Genres/NewGenre';
import EditGenre from './Genres/EditGenre';
import Series from './Series/Series';
import NewSerie from './Series/NewSerie';
import InfoSerie from './Series/InfoSerie';

function Home() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 mt-2'>
          <h1>Home</h1>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/generos' exact component={Genres}/>
          <Route path='/generos/novo' exact component={NewGenre}/>
          <Route path='/generos/:id' exact component={EditGenre}></Route>

          <Route path='/series' exact component={Series}></Route>
          <Route path='/series/nova' exact component={NewSerie}></Route>
          <Route path='/series/:id' exact component={InfoSerie}></Route>
        </Switch>
    </Router>
  );
}

export default App;
