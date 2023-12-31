import { useRoutes } from "react-router-dom";
import Header from "./Components/Header/Header";
import { routes } from "./route";

import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
function App() {
  const router = useRoutes(routes);

  return (
    <>
      <Header />
      <main>
        <SideBar />
        {router}
      </main>
    </>
  );
}

export default App;
