import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Player from "./routes/Player";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },

  {
    path: ":slug",
    element: <Player />,
  },
]);
