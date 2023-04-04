import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import type { Message } from "~/types/appstate";

const MessageContainer = ({ content, role }: Message) => {
  return (
    <div className="px-4 rounded-lg mb-2">
      <div className="pl-14 relative response-block scroll-mt-32 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-900 pb-2 pt-2 pr-2 group min-h-[52px]">
        <div className="absolute top-2 left-2">
          <div className='w-9 h-9 bg-gray-200 rounded-md  flex-none flex items-center justify-center text-gray-500 hover:bg-gray-300 transition-all active:bg-gray-200'>
            {role === 'user'
              ? (<Image src='/favicon.ico' alt="Avatar" width={20} height={20} />)
              : (<Cog6ToothIcon className="w-5 h-5" />)
            }
          </div>
        </div>
        <div className="w-full">
          {role === 'assistant'
            ? <AIResponse content={content} />
            : (
              <UserSubmission content={content} />
            )}
        </div>
      </div>
    </div>
  );
};
const AIResponse = ({ content }: { content: string }) => {
  return (
    <div className="prose prose-sm max-w-full dark:prose-invert">
      <TextWithCode text={content} />
    </div>
  );
};
const UserSubmission = ({ content }: { content: string }) => {
  return (
    <div>
      <div className="text-sm break-words text-ellipsis space-y-2 w-fit text-white px-4 py-2 rounded-lg max-w-full overflow-auto highlight-darkblue focus:outline bg-blue-500">
        {content}
      </div>
    </div>
  );
};
export const TextWithCode = ({ text }: { text: string }) => {
  const parsedText = parseText(text);
  return (
    <div>
      {parsedText.map((item, index) =>
        item.type === 'text' ? (
          <p key={index}>{item.content}</p>
        ) : (
          <pre key={index} className="text-black bg-gray-200 text-shadow text-xs font-mono whitespace-pre-wrap break-words no-hyphens leading-5 tab-size-4 p-4 my-2 overflow-auto">
            <code>{item.content}</code>
          </pre>
        )
      )}
    </div>
  );
};
const parseText = (text: string) => {
  const codeBlockRegex = /```([\s\S]*?)```/g;
  const parsedText = [];

  let match;
  let lastIndex = 0;

  while ((match = codeBlockRegex.exec(text))) {
    const code = match[1];
    const textBeforeCode = text.slice(lastIndex, match.index);
    lastIndex = codeBlockRegex.lastIndex;

    if (textBeforeCode.trim()) {
      parsedText.push({ type: 'text', content: textBeforeCode.trim() });
    }

    if (code?.trim()) {
      parsedText.push({ type: 'code', content: code.trim() });
    }
  }

  const textAfterLastCode = text.slice(lastIndex);
  if (textAfterLastCode.trim()) {
    parsedText.push({ type: 'text', content: textAfterLastCode.trim() });
  }

  return parsedText;
};
export default MessageContainer;