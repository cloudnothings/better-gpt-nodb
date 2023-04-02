import { create } from "zustand";

export const initialState = {
  apiKey: "",
  apiKeyError: false,
  cost: 0,
};

const loadState = () => {
  const state = initialState;
  const apiKey = localStorage.getItem("apiKey");
  if (apiKey) {
    state.apiKey = apiKey;
  }
  const cost = localStorage.getItem("cost");
  if (cost) {
    state.cost = parseInt(cost);
  }
  return state;
};

interface KeyStore {
  apiKey: string;
  setApiKey: (value: string) => void;
  apiKeyError: boolean;
  setApiKeyError: (value: boolean) => void;
  cost: number;
  setCost: (value: number) => void;
  loadState: () => void;
  resetState: () => void;
}

const useKeyStore = create<KeyStore>((set) => ({
  ...initialState,
  apiKey: initialState.apiKey,
  setApiKey: (value: string) => set({ apiKey: value }),
  apiKeyError: initialState.apiKeyError,
  setApiKeyError: (value: boolean) => set({ apiKeyError: value }),
  cost: initialState.cost,
  setCost: (value: number) => set({ cost: value }),
  loadState: () => set(loadState()),
  resetState: () => set(initialState),
}));

export default useKeyStore;
