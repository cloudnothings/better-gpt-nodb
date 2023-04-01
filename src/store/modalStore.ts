import { create } from "zustand";

export const initialState = {
  modelModal: false,
  apiKeyModal: false,
  promptSettingsModal: false,
};

interface ModalStore {
  modelModal: boolean;
  apiKeyModal: boolean;
  promptSettingsModal: boolean;
  setModelModal: (value: boolean) => void;
  setApiKeyModal: (value: boolean) => void;
  setPromptSettingsModal: () => void;
  resetState: () => void;
}

const useModalStore = create<ModalStore>((set) => ({
  ...initialState,
  modelModal: initialState.modelModal,
  apiKeyModal: initialState.apiKeyModal,
  promptSettingsModal: initialState.promptSettingsModal,
  setModelModal: (value: boolean) => set({ modelModal: value }),
  setApiKeyModal: (value: boolean) => set({ apiKeyModal: value }),
  setPromptSettingsModal: () =>
    set((state) => ({ promptSettingsModal: !state.promptSettingsModal })),
  resetState: () => set(initialState),
}));

export default useModalStore;
