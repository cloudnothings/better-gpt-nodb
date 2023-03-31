import { create } from "zustand";

export const initialState = {
  apiKey: "",
  apiKeyError: false,
  cost: 0,
};

interface KeyStore {
  apiKey: string;
  setApiKey: (value: string) => void;
  apiKeyError: boolean;
  setApiKeyError: (value: boolean) => void;
  cost: number;
  setCost: (value: number) => void;
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
  resetState: () => set(initialState),
}));

export default useKeyStore;
