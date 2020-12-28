import { observable, action } from "mobx";

export const stateCounter = observable({
  count: 0,
  inc: action(function () {
    stateCounter.count++;
  }),
  dec: action(function () {
    stateCounter.count--;
  }),
});
