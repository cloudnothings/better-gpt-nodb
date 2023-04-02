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
      name: "GPT-3.5-TURBO-0301",
      id: "gpt-3.5-turbo-0301",
      description:
        "Snapshot of gpt-3.5-turbo from March 1st 2023. Unlike gpt-3.5-turbo, this model will not receive updates, and will only be supported for a three month period ending on June 1st 2023.",
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
      name: "GPT-4-0314 (Limited Beta)",
      id: "gpt-4-0314",
      description:
        "Snapshot of gpt-4 from March 14th 2023. Unlike gpt-4, this model will not receive updates, and will only be supported for a three month period ending on June 14th 2023.",
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
    {
      name: "GPT-4-32K-0314 (Limited Beta)",
      id: "gpt-4-32k-0314",
      description:
        "Snapshot of gpt-4-32k from March 14th 2023. Unlike gpt-4-32k, this model will not receive updates, and will only be supported for a three month period ending on June 14th 2023.",
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
  setDefaultModel: (model: Model) => void;
  setDefaultSystemMessage: (message: string) => void;
  setModels: (models: Model[]) => void;
  setWidth: (width: number) => void;
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
  loadState: () => set(loadState()),
}));

export default useAppStore;
