import React from "react";
import { createRoot } from "react-dom/client";
import Canvas from "./Canvas";

const root = createRoot(document.getElementById("root")!);
root.render(<Canvas />);
