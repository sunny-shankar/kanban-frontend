import { create } from "zustand";

const userStore = create((set) => ({
  loading: false,
  userToken: null,
  setUserToken: (accessToken) => {
    set(() => ({ userToken: accessToken }));
  },
  removeUserToken: () => set(() => ({ userToken: null })),
  toggleLoading: () => set((state) => ({ loading: !state.loading })),
}));

export default userStore;
