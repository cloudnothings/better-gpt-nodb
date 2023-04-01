'use client';

import useKeyStore from "~/store/keyStore";

async function getOpenAiStatus() {
  await fetch('https://api.openai.com/v1/status')
    .then((response: Response) => response.json())
    .then((data: { status: string }) => {
      if (data.status === 'ok') {
        console.log('OpenAI API is working properly');
      } else {
        console.log('OpenAI API is experiencing issues');
      }
    })
    .catch((error: Error) => {
      console.log('Error: Unable to reach OpenAI API')
    });
}

const OpenAiStatus = async () => {
  const status = await getOpenAiStatus();
  const apiKey = useKeyStore(state => state.apiKey)

  return (
    <button className="flex items-center justify-center absolute left-full ml-2">
      <div className="h-3 w-3 rounded-full bg-green-500" />
    </button>
  )
}

export default OpenAiStatus