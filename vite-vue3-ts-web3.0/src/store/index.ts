import { InjectionKey } from "vue";

import { useStore as baseUserStore, createStore, Store } from "vuex";

interface State {
  username: string;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    username: "张三",
  },
  getters: {
    getName: (stete) => {
      return stete.username;
    },
  },
  mutations: {
    SET_USERNAME(stete, username: string) {
      stete.username = username;
    },
  },
  actions: {},
});

export function useStore() {
  return baseUserStore(key);
}
