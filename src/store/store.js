import { observable, action } from 'mobx';


export const appState = observable({
    count: 0,
    inc:action(function(){
      appState.count++}),
    dec:action(function(){
      appState.count--
    })
  });