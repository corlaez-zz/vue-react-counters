import Vue from "vue/dist/vue";
import { OvermindPlugin } from "./OvermindPlugin";

Vue.use(OvermindPlugin);

new Vue({
  el: "#vue",
  template: `
    <div>
      <h3>Vue Counter</h3>
      <button @click="overmind.actions.increment()">+</button>
      <span>{{overmind.state.counter}}</span>
      <button @click="overmind.actions.decrement()">-</button>
    </div>
  `
});