import React, { Suspense } from "react";

const Canvas = React.lazy(() => import("canvas/Canvas"));

export default function App() {
  return (
    <div>
      <h1>🛠️ Lowcode Shell</h1>
      <Suspense fallback={<div>Loading Canvas...</div>}>
        <Canvas />
      </Suspense>
    </div>
  );
}
