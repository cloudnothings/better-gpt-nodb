import Sidebar from "~/app/Sidebar";
import ApiKeyModal from "../components/modals/ApiKeyModal";
import Main from "~/app/Main";
import ChangeModelModal from "~/components/modals/ChangeModelModal";

const HomePage = () => {
  return (
    <div>
      <ChangeModelModal />
      <ApiKeyModal />
      <Sidebar />
      <Main />
    </div>
  );
}

export default HomePage;

