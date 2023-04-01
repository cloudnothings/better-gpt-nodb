import { create } from "zustand";

export const initialState = {
  message: "",
  isLoading: false,
};

interface ChatStore {
  message: string;
  setMessage: (value: string) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  resetState: () => void;
}

const useChatStore = create<ChatStore>((set) => ({
  ...initialState,
  message: initialState.message,
  setMessage: (value: string) => set({ message: value }),
  isLoading: initialState.isLoading,
  setIsLoading: (value: boolean) => set({ isLoading: value }),
  resetState: () => set(initialState),
}));

export default useChatStore;
