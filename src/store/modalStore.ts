import { create } from "zustand";

export const initialState = {
  modelModal: false,
  apiKeyModal: false,
};

interface ModalStore {
  modelModal: boolean;
  apiKeyModal: boolean;
  setModelModal: (value: boolean) => void;
  setApiKeyModal: (value: boolean) => void;
  resetState: () => void;
}

const useModalStore = create<ModalStore>((set) => ({
  ...initialState,
  modelModal: initialState.modelModal,
  apiKeyModal: initialState.apiKeyModal,
  setModelModal: (value: boolean) => set({ modelModal: value }),
  setApiKeyModal: (value: boolean) => set({ apiKeyModal: value }),
  resetState: () => set(initialState),
}));

export default useModalStore;
