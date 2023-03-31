import MainBody from "../components/MainBody";
import TopBar from "./TopBar";

export default function Main() {
  return (
    <div className="flex flex-1 flex-col lg:pl-80">
      <main className="relative">
        <TopBar />
        <MainBody />
      </main>
    </div>
  );
}