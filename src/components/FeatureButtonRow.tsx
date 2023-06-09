'use client';

import useThreadStore from "~/store/threadStore";
import ChangeModelButton from "./Buttons/ChangeModelButton";

export default function FeatureButtonRow() {
  const currentThread = useThreadStore(state => state.currentThread)
  if (currentThread) return null
  return (
    <div className="my-4 text-center flex items-center justify-center flex-wrap gap-2 px-4">
      <ChangeModelButton />
      {/* <SelectCharacterButton />
      <PromptLibraryButton />
      <UploadButton /> */}
    </div>
  )
}