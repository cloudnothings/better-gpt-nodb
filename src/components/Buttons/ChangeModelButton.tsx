'use client';

import useAppStore from "~/store/appStore";
import useModalStore from "~/store/modalStore";
import useThreadStore from "~/store/threadStore";
import FeatureButton from "./FeatureButton";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function ChangeModelButton() {
  const defaultModel = useAppStore(state => state.defaultModel)
  const currentThread = useThreadStore(state => state.currentThread)
  const setModelModal = useModalStore(state => state.setModelModal)
  // Open modal to change model
  return (
    <FeatureButton color="bg-gradient-to-r from-green-500 to-cyan-500 active:bg-cyan-600"
      featureName={`Model: ${currentThread?.model.name || defaultModel.name}`}
      icon={Cog6ToothIcon}
      onClick={() => setModelModal(true)}
    />
  )
}