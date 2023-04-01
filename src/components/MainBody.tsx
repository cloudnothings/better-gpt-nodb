import ResizeColumn from "./Buttons/ResizeColumn";
import ChatBar from "./ChatBar/ChatBar";
import FeatureButtonRow from "./FeatureButtonRow";
import MessageWindow from "./MessageWindow/MessageWindow";
import ProductContainer from "./ProductContainer";
import ProductSplash from "./ProductSplash";
import Warnings from "./Warnings";

const MainBody = () => {
  return (
    <div className="resize-container relative" >
      <ResizeColumn />
      <ProductContainer>
        <ProductSplash />
        <MessageWindow />
        <FeatureButtonRow />
        <Warnings />
      </ProductContainer>
      <ChatBar />
    </div>
  )
}

export default MainBody