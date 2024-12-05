import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  // const progress = 10;
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="w-40 flex justify-between mb-1 p-0.5 text-base font-medium text-zinc-600 dark:text-zinc-300">
        <span>Loading</span>
        <span>{progress}%</span>
      </div>
      <div className="w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="gradient-bg h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </Html>
  );
};

export default CanvasLoader;
