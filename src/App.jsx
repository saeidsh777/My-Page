import { useRoutes } from "react-router-dom";
import Header from "./Components/Header/Header";
import { routes } from "./route";
import SideBar from "./Components/SideBar/SideBar";

import "./App.css";
import { useState } from "react";
import MyImg from "./Components/MyImg/MyImg";

function App() {
  const router = useRoutes(routes);
  const [pathName, setPathName] = useState("HOMEPAGE");

  return (
    <>
      <Header setPathName={setPathName} />
      <main className="d-lg-flex">
        <SideBar pathName={pathName} />
        <div className="row g-0 w-100">
          {router}
          <MyImg />
        </div>
      </main>
    </>
  );
}

export default App;
