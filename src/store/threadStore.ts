import { create } from "zustand";
import type { Model, Thread } from "~/types/appstate";
const models = [
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
] as Model[];

const initialThread = {
  id: "",
  name: "",
  profileId: "",
  budget: 0,
  cost: 0,
  description: "",
  initialSystemInstruction: "",
  messages: [],
  model: models[0] as Model,
  starred: false,
  title: "",
} as Thread;
export const initialState = {
  currentThread: initialThread,
  threads: [],
};

interface ThreadStore {
  currentThread: Thread | null;
  setCurrentThread: (value: Thread | null) => void;
  threads: Thread[];
  setThreads: (value: Thread[]) => void;
  resetState: () => void;
}

const useThreadStore = create<ThreadStore>((set) => ({
  ...initialState,
  currentThread: initialState.currentThread,
  setCurrentThread: (value: Thread | null) => set({ currentThread: value }),
  threads: initialState.threads,
  setThreads: (value: Thread[]) => set({ threads: value }),
  resetState: () => set(initialState),
}));

export default useThreadStore;
