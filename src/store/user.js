import { create } from "zustand";

const userStore = create((set) => ({
  loading: false,
  userToken: null,
  userEmail: "",
  lists: [],
  // tasks: [],
  setUserToken: (accessToken) => {
    set(() => ({ userToken: accessToken }));
  },
  setUserEmail: (email) => {
    set(() => ({ userEmail: email }));
  },
  removeUserToken: () => set(() => ({ userToken: null })),
  toggleLoading: () => set((state) => ({ loading: !state.loading })),
  addLists: (data) => set((state) => ({ lists: data })),
}));

export default userStore;
