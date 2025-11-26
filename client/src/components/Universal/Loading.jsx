// icons
import { ImLeaf } from "react-icons/im";

const Loading = () => {
  return (
    <div className="w-full h-screen bg-(--white) flex items-center justify-center">
      <div className="w-fit text-5xl flex flex-row items-center gap-3">
        <ImLeaf className="text-(--primary)" />
        <p className="font-bold text-(--text)">Organic</p>
      </div>
    </div>
  );
}

export default Loading