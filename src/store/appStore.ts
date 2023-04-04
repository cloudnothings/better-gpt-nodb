import { create } from "zustand";
import type { Model } from "~/types/appstate";

export const initialState = {
  defaultModel: {
    name: "GPT-3.5-TURBO",
    id: "gpt-3.5-turbo",
    description:
      "Most capable GPT-3.5 model and optimized for chat at 1/10th the cost of text-davinci-003. Will be updated with our latest model iteration.",
    maxTokens: 4096,
    usageCost: 0.002,
    trainingData: "Up to Sep 2021",
  } as Model,
  models: [
    {
      name: "GPT-3.5-TURBO",
      id: "gpt-3.5-turbo",
      description:
        "Most capable GPT-3.5 model and optimized for chat at 1/10th the cost of text-davinci-003. Will be updated with our latest model iteration.",
      maxTokens: 4096,
      usageCost: 0.002,
      trainingData: "Up to Sep 2021",
    },

    {
      name: "GPT-4 (Limited Beta)",
      id: "gpt-4",
      description:
        "More capable than any GPT-3.5 model, able to do more complex tasks, and optimized for chat. Will be updated with our latest model iteration.",
      maxTokens: 8192,
      promptCost: 0.03,
      completionCost: 0.06,
      trainingData: "Up to Sep 2021",
      note: "you need API Access to GPT-4 to use this model. If you haven't already, join the waitlist here: https://openai.com/waitlist/gpt-4-api",
    },
    {
      name: "GPT-4-32K (Limited Beta)",
      id: "gpt-4-32k",
      description:
        "Same capabilities as GPT-4, but with 4x the context length. Will be updated with our latest model iteration.",
      trainingData: "Up to Sep 2021",
      promptCost: 0.06,
      completionCost: 0.12,
      maxTokens: 32768,
      note: "you need API Access to GPT-4 to use this model. If you haven't already, join the waitlist here: https://openai.com/waitlist/gpt-4-api",
    },
  ] as Model[],
  defaultSystemMessage:
    "You are ChatGPT, a powerful and helpful AI created by OpenAI.",
  width: 0,
  showSidebar: false,
};

const loadState = () => {
  const state = initialState;
  const defaultModel = localStorage.getItem("defaultModel");
  if (defaultModel) {
    const modelId = defaultModel;
    const model = state.models.find((m) => m.id === modelId);
    if (model) {
      state.defaultModel = model;
    }
  }
  const width = localStorage.getItem("width");
  if (width) {
    state.width = parseInt(width);
  }
  const showSidebar = localStorage.getItem("showSidebar");
  if (showSidebar) {
    state.showSidebar = showSidebar === "true";
  }
  const defaultSystemMessage = localStorage.getItem("defaultSystemMessage");
  if (defaultSystemMessage) {
    state.defaultSystemMessage = defaultSystemMessage;
  }
  return state;
};

interface AppStore {
  defaultModel: Model;
  defaultSystemMessage: string;
  models: Model[];
  width: number;
  showSidebar: boolean;
  setDefaultModel: (model: Model) => void;
  setDefaultSystemMessage: (message: string) => void;
  setModels: (models: Model[]) => void;
  setWidth: (width: number) => void;
  setShowSidebar: (show: boolean) => void;
  loadState: () => void;
}

const useAppStore = create<AppStore>((set) => ({
  ...initialState,
  defaultModel: initialState.defaultModel,
  setModels: (models: Model[]) => set({ models }),
  defaultSystemMessage: initialState.defaultSystemMessage,
  setDefaultSystemMessage: (message: string) =>
    set({ defaultSystemMessage: message }),
  models: initialState.models,
  setDefaultModel: (model: Model) => set({ defaultModel: model }),
  width: initialState.width,
  setWidth: (width: number) => set({ width }),
  showSidebar: initialState.showSidebar,
  setShowSidebar: (show: boolean) => set({ showSidebar: show }),
  loadState: () => set(loadState()),
}));

export default useAppStore;
