import { create } from "zustand";
import type { Thread } from "~/types/appstate";

export const initialState = {
  currentThread: null as Thread | null,
  threads: [] as Thread[],
};

interface ThreadStore {
  currentThread: Thread | null;
  setCurrentThread: (value: Thread | null) => void;
  threads: Thread[];
  setThreads: (value: Thread[]) => void;
  loadState: () => void;
  resetThread: () => void;
  resetState: () => void;
}
const loadState = () => {
  const state = initialState;
  const threads = localStorage.getItem("threads");
  if (threads) {
    state.threads = JSON.parse(threads) as Thread[];
  }
  // const currentThread = localStorage.getItem("currentThread");
  // if (currentThread) {
  //   state.currentThread = JSON.parse(currentThread) as Thread;
  // }
  return state;
};
const useThreadStore = create<ThreadStore>((set) => ({
  ...initialState,
  currentThread: initialState.currentThread,
  setCurrentThread: (value: Thread | null) => set({ currentThread: value }),
  threads: initialState.threads,
  setThreads: (value: Thread[]) => set({ threads: value }),
  loadState: () => set(loadState()),
  resetThread: () => set({ currentThread: initialState.currentThread }),
  resetState: () => set(initialState),
}));

export default useThreadStore;
