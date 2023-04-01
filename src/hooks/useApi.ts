import { useState } from "react";
import {
  Configuration,
  OpenAIApi,
  type CreateChatCompletionResponse,
} from "openai";
import { type AxiosError } from "axios";
export default function useApi() {
  const [data, setData] = useState<CreateChatCompletionResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [isSuccess, setSuccess] = useState(false);

  const mutate = (
    input: {
      apiKey: string;
      model: string;
      messages: {
        role: "user" | "system" | "assistant";
        content: string;
      }[];
    },
    options?: {
      onSuccess?: () => void;
      onError?: () => void;
      onSettled?: () => void;
    }
  ) => {
    setIsLoading(true);
    const configuration = new Configuration({
      apiKey: input.apiKey,
    });
    const openai = new OpenAIApi(configuration);
    openai
      .createChatCompletion({
        model: input.model,
        messages: input.messages,
      })
      .then((response) => {
        setData(response.data);
        setSuccess(true);
        options?.onSuccess?.();
      })
      .catch((err: AxiosError) => {
        setError(err.message);
        options?.onError?.();
      })
      .finally(() => {
        setIsLoading(false);
        options?.onSettled?.();
      });
  };

  return { isSuccess, data, loading: isLoading, error, mutate };
}
