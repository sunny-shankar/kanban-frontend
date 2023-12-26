import { create } from "zustand";

const userStore = create((set) => ({
  loading: false,
  userToken: null,
  lists: [],
  // tasks: [],
  setUserToken: (accessToken) => {
    set(() => ({ userToken: accessToken }));
  },
  removeUserToken: () => set(() => ({ userToken: null })),
  toggleLoading: () => set((state) => ({ loading: !state.loading })),
  addLists: (data) => set((state) => ({ lists: data })),
}));

export default userStore;
