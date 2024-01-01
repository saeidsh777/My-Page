import { useRoutes } from "react-router-dom";
import Header from "./Components/Header/Header";
import { routes } from "./route";
import SideBar from "./Components/SideBar/SideBar";

import "./App.css";
import { useState } from "react";

function App() {
  const router = useRoutes(routes);
  const [pathName, setPathName] = useState("HOMEPAGE");

  return (
    <>
      <Header setPathName={setPathName} />
      <main className="d-xl-flex">
        <SideBar pathName={pathName} />
        {router}
      </main>
    </>
  );
}

export default App;
