import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DevTools from 'mobx-react-devtools';
import { observer } from 'mobx-react';
import {appState} from './store/store';
import {App} from './App';

 const Counter =   observer(({store:{count, inc, dec}}) => {

  
  
    return (
      <div className="App">
        <DevTools />
        <App />
      </div>
    );
  
})

ReactDOM.render(<App />, document.getElementById('root'));

