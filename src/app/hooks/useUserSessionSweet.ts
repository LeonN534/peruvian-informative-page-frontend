"use client";

import { createStore, createHook } from "react-sweet-state";
import { getLoggedInUser } from "@/app/services/auth.service";
import { User } from "@/app/interfaces/user.interface";

const initialState: User = {
  id: "",
  email: "",
  fullName: "",
  creationDate: new Date(),
};

const actions = {
  fetchData:
    () =>
    async ({ setState }: any) => {
      setState({ isLoading: true });
      try {
        const res = await getLoggedInUser();
        let data: User = initialState;
        if (res.success) data = res.data;
        setState(data);
      } catch (error) {
        setState(initialState);
      }
    },
};

const Store = createStore({
  initialState,
  actions,
});

export const useUserSessionStore = createHook(Store);
