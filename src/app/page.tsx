import Sidebar from "./Sidebar";
import Main from "./Main";
import ApiKeyModal from "~/components/modals/ApiKeyModal";

export default function Page() {
  return (
    <div>
      <ApiKeyModal />
      <Sidebar />
      <Main />
    </div>
  );
}

