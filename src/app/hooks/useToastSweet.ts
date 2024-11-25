"use client";

import { createStore, createHook, Action } from "react-sweet-state";

interface ToastState {
  show: boolean;
}

const initialState: ToastState = {
  show: false,
};

const actions = {
  setState:
    (state: boolean): Action<ToastState> =>
    ({ setState }) => {
      setState({ show: state });
    },
};

const Store = createStore({
  initialState,
  actions,
});

export const useToastStore = createHook(Store);
