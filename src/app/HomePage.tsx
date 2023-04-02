import Sidebar from "~/app/Sidebar";
import ApiKeyModal from "../components/modals/ApiKeyModal";
import Main from "~/app/Main";

const HomePage = () => {
  return (
    <div>
      <ApiKeyModal />
      <Sidebar />
      <Main />
    </div>
  );
}

export default HomePage;

