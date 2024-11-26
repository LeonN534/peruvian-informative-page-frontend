"use client";

import { createStore, createHook, Action } from "react-sweet-state";

interface ModalState {
  active: boolean;
  commentId: number;
}

const initialState: ModalState = {
  active: false,
  commentId: 0,
};

const actions = {
  setState:
    ({
      state,
      commentId,
    }: {
      state: boolean;
      commentId: number;
    }): Action<ModalState> =>
    ({ setState }) => {
      setState({ active: state, commentId });
    },
};

const Store = createStore({
  initialState,
  actions,
});

export const useModalStore = createHook(Store);
