import { Overmind, Action, IConfig } from "overmind";

const increment: Action<number | void> = async ({ state }, by = 1) => {
    state.counter += by as number;//
};

const decrement: Action<number | void> = async ({ state }, by = 1) => {
    state.counter -= by as number;
};

const config = {
    state: {
      counter: 1,
      appName: 'Asdf'
    },
    actions: {
      increment,
      decrement
    }
  }
  
declare module 'overmind' {
    interface Config extends IConfig<typeof config> {}
}

export const overmind = new Overmind(config);
