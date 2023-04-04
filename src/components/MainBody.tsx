
import useThreadStore from "~/store/threadStore";
import ResizeColumn from "./Buttons/ResizeColumn";
import ChatBar from "./ChatBar/ChatBar";
import FeatureButtonRow from "./FeatureButtonRow";
import MessageWindow from "./MessageWindow/MessageWindow";
import ProductContainer from "./ProductContainer";
import ProductSplash from "./ProductSplash";
import Warnings from "./Warnings";

const MainBody = () => {
  const currentThread = useThreadStore(state => state.currentThread)
  return (
    <div className="relative" >
      <ResizeColumn />
      <ProductContainer>
        <ProductSplash />
        <MessageWindow />
        {!currentThread && <FeatureButtonRow />}
        <Warnings />
      </ProductContainer>
      <ChatBar />
    </div>
  )
}

export default MainBody