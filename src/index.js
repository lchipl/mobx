import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DevTools from 'mobx-react-devtools';
import { observer } from 'mobx-react';
import {appState} from './store/store';

 const Counter =   observer(({store:{count, inc, dec}}) => {

  
  
    return (
      <div className="App">
        <DevTools />
        <h1>{count}</h1>
        <button onClick={dec}>-1</button>
        <button onClick={inc}>+1</button>
      </div>
    );
  
})

ReactDOM.render(<Counter store={appState} />, document.getElementById('root'));

